import { spawn } from 'child_process'

export const  auditPolitics = async (req, res) => {
    try{
        //const inputData = req.body.data
        const pythonProcess = spawn('python', ['auditPolitics.py']);
        let responseData = ''; // Accumulate data

        pythonProcess.stdout.on('data', (data) => {
            responseData += data.toString(); // Accumulate data
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`Python stderr: ${data}`);
        });

        pythonProcess.on('close', (code) => {
            console.log(`Python process closed with code ${code}`);
            // Send the response after all data has been received
            res.json({ result: responseData });
        });
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
        console.log(error)
    }
}