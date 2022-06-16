import {MailAdapter, SendMailData} from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "coloque seu user do mailtrap aqui...",
    pass: "coloque seu pass do mailtrap aqui...",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe FeedGet <oi@feedget.com>",
      to: "'seu nome' <seu_email@gmail.com>",
      subject,
      html: body,
    });
  }
}
