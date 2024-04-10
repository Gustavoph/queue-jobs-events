import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private readonly transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'kattie.wolf49@ethereal.email',
        pass: 'tqepSW15X3feaQeESW',
      },
    });
  }

  async send(mailOptions: nodemailer.SendMailOptions) {
    await this.transporter.sendMail(mailOptions);
  }
}
