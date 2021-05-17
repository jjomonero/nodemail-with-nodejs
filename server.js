
const nodemailer = require('nodemailer');

const express = require('express');

const ejs = require('ejs')

const app = express();

app.get('/sendmail', async (req, res) => {
    //transporter
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "34460f056aaa5a",
          pass: "0b94f51a1e4bc9"
        }
      });

    // configuração do email
      let message = await transport.sendMail({
          from: '"pessoa teste" <pessoa@test.com>',
          to: "test@test.com",
          subject: "email com nodemailer",
          text: "este é um email de teste",
          html: "<h1> este é um email de test </h1>"

      })


      res.send(' mensagem enviada ');
});

app.listen(3001, () =>{
    console.log('running on PORT 3001...')
})