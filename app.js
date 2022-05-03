const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport');
const {SENDGRID_API} = require('./config/keys')

const PORT = process.env.PORT || 3000

app.use(express.json())

const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{
        api_key:SENDGRID_API
    }
}))

app.post('/send', (req, res) => {
    const { firstname,lastname, email,phonenumber,brokerage, message, subject } = req.body
    transporter.sendMail({
        to:'tttobis@gmail.com',
        from: email,
        subject:subject,
        html:`<h3>Name: ${firstname}, ${lastname}</h3>
            <br/>
            <p>phone number: ${phonenumber}</p>
            <p>Borkerage: ${brokerage}</p>
            <p>${message}</p>`
    }).then(resp => {
        res.json({resp})
    })
    .catch(err => {
    })
})



app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})