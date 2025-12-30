import bcrypt  from "bcryptjs"
import jwt  from "jsonwebtoken"
import User from "../../model/user.model.js"



// list users
export const listUsers = async (req, res) => {
    try{
    const users = await User.find()
    res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}


// add user
export const addUser = async (req, res) => {
    try{
    if (!req.body.text) {
        res.status(400) 
    }
    const { fullName, email, password, dob, role } = req.body
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(500).json({
            message: "User already exists"
        })
    }

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        fullName,
        email,
        dob,
        role,
        password: hashedPassword,
    })

    const users = await User.find()
    
    res.status(200).json(users)

} catch (error) {
    res.status(500).json({message: 'Server Error'})
}

}

//select user
export const selectUser = async(req, res) => {
try {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(400)
    } else {
        res.status(200).json(user)
    }
} catch (error) {
    res.status(500).json({message: 'Server Error'})
}


}

// delete user by id
export const deleteUser = async (req, res) => {

    const user = User.findById(req.params.id)

    const deleted = await User.deleteOne({ _id: req.params.id })


    res.status(200).json(req.params.id)


}


// update user by id
export const updateUser = async (req, res) => {
    
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(400)
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedUser)


}


// register
export const registerUser = async(req, res) => {
try {
    const { fullName, email, password, dob, role } = req.body

    if (!fullName || !email || !password || dob) {
        res.status(400)
    }

    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400).json({
            message: "User already exists"
        })
    }

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        fullName,
        email,
        password: hashedPassword,
        dob,
        role: 'user'
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
            dob: user.dob,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
    }
} catch (error) {
    res.status(500).json({message: 'Server Error'})
}
}


// login
export const loginUser = async(req, res) => {
    try {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
            dob: user.dob,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json({
            message: "invalid credentials"
        })
    }
} catch (error) {
    res.status(500).json({message: 'Server Error'})
}
}


// get user 
export const getUser = async(req, res) => {
   
    res.status(200).json(req.user)
 }


//generate token
export const SECRET_KEY = "a1b2"
const generateToken = (id) => {
    return jwt.sign({ id }, SECRET_KEY, {
        expiresIn: "7d"
    })
}