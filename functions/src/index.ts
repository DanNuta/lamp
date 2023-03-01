const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

//create and config transporter
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "dany.condurari@email.com",
    pass: "dehxddkclddvaanm",
  },
});

exports.sendEmail = functions.https.onRequest((req: any, res: any) => {
  //for testing purposes
  console.log(
    "from sendEmail function. The request object is:",
    JSON.stringify(req.body)
  );

  //enable CORS using the `cors` express middleware.
  cors(req, res, () => {
    // const email = req.body.data.email;
    // const name = req.body.data.name;
    // const message = req.body.data.message;

    const mailOptions = {
      from: "dany.condurari@gmail.com",
      to: `dany.condurari@email.com`,
      subject: "New message from the nodemailer-form app",
      text: `Salut gmail`,
    };

    //call the built in `sendMail` function and return different responses upon success and failure
    return transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      }

      return res.status(200).send({
        data: {
          status: 200,
          message: "sent",
        },
      });
    });
  });
});
