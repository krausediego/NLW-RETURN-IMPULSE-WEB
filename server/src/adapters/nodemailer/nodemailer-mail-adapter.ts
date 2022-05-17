import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ee8c1c9d9e5545",
    pass: "0d3ae2feb3a276"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@fidget.com>',
      to: 'Diego Krause <diegoemanuelk@gmail.com>',
      subject,
      html: body,
    })
  };
}