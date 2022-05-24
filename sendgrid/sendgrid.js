const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport');

//Create it locally
const {SENDGRID_API_KEY} = require('./config/keys.js')

module.exports.handler = async (event) => {

    try {
      const transporter = nodemailer.createTransport(sendGridTransport({
        auth:{
            api_key: SENDGRID_API_KEY
        }
      }))
      
    const { firstname,lastname, email, phonenumber ,brokerage , message , subject, userType } = JSON.parse(event.body)
    let resp;
    resp = await transporter.sendMail({
        to:'tobias@remigo.com',
        from: 'remigo.team@gmail.com',
        subject:subject,
        html:`<h3>Name: ${firstname}, ${lastname}</h3>
            <h5>user type: ${userType}</h5>
            <h5>email: ${email}</h5>
            <h5>phone number: ${phonenumber}</h5>
            <h5>Borkerage: ${brokerage}</h5>
            <p>message: ${message}</p>`
    })
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message:  resp,

      }),
    }
  } catch (error) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: error.message,
        })
    }
  }

}