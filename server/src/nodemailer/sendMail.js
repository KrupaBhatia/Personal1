const nodemailer = require("nodemailer");
const { unique_id } = require('../Controllers/formController')


const sendMail= async (Email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			// host: process.env.HOST,
			service: "gmail",
			// port: Number(process.env.EMAIL_PORT),
			// secure: Boolean(process.env.SECURE),
			auth: {
				user: "indianevisaa@gmai",
				pass: "wcpwdsjbcenddbug",
			},
		});
        let details = await transporter.sendMail({
			from: "Indian-e-Visa",
			to: Email,
			subject: subject,
			text: text,
		});
      transporter.sendMail(details,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("email sent");
        }
      })

	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};

module.exports = { sendMail }