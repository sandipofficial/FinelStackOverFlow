import nodemailer from 'nodemailer'

async function Mailer (otp) {
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sandipgardi5@gmail.com',
            pass: 'kabIr#MH12'
        }
    });
    let mailDetails = {
        from: 'sandipgardi5@gmail.com',
        to: otp.email,
        subject: 'OTP For Authentication Stackoverflow Chatbot',
        text: JSON.stringify(otp.otp)
    };
    
    mailTransporter.sendMail(mailDetails, async function (err, data) {
        if (err) {
            console.log('Error Occurs', err);
            return false;
        } else {
            console.log('Email sent successfully');
            return true;
        }
    });
}


export default Mailer;