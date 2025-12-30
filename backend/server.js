import bodyParser from "body-parser"
import cors from 'cors'
import express from 'express'
import { connectDB } from "./controll/databse/db.js"
import userRoutes from "./controll/routes/users.route.js"
import missionRoutes from "./controll/routes/missions.route.js"
import auditRoutes from "./controll/routes/audits.route.js"
import constatRoutes from "./controll/routes/constats.route.js"
import isoRoutes from "./controll/routes/iso.route.js"
import familleRouter from "./controll/routes/familleC.route.js"
import categoryRouter from "./controll/routes/categoryC.route.js"
import securityRouter from "./controll/routes/securityC.route.js"
import maturityRouter from "./controll/routes/maturity.route.js"
import politicsRouter from "./controll/routes/politics.route.js"

const app = express()
const PORT = 8080

connectDB()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
  }))

app.use(cors())

app.use('/users', userRoutes)
app.use('/missions', missionRoutes)
app.use('/audits', auditRoutes)
app.use('/constats', constatRoutes)
app.use('/iso', isoRoutes)
app.use('/familles', familleRouter)
app.use('/categories', categoryRouter)
app.use('/sec', securityRouter)
app.use('/maturity', maturityRouter)
app.use('/politics', politicsRouter)


app.listen(PORT)


app.get("/", (req, res) => {
    res.send("ok")
})
