const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport');

module.exports.handler = async (event) => {

    try {
      const transporter = nodemailer.createTransport(sendGridTransport({
        auth:{
            api_key:process.env.SENDGIRD_API_KEY 
        }
      }))
      
    const { firstname,lastname, email,phonenumber,brokerage, message, subject } = event.body
    let resp;
    resp = await transporter.sendMail({
        to:'tttobis@gmail.com',
        from: 'tobias@remigo.com',
        subject:subject,
        html:`<h3>Name: ${firstname}, ${lastname}</h3>
            <br/>
            <p>email: ${email}</p>
            <p>phone number: ${phonenumber}</p>
            <p>Borkerage: ${brokerage}</p>
            <p>${message}</p>`
    })
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: resp,
      }),
    }
  } catch (error) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: error,
        })
    }
  }

}