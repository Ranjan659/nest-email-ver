import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Req, Res } from '@nestjs/common';
import { use } from 'passport';
import { RegisterDTO } from 'src/user/dto/register.dto';
const nodemailer = require('nodemailer');
// const nodemailerSendgrid = require('nodemailer-sendgrid');
import {response as res, } from 'express'

import * as sgMail from '@sendgrid/mail';

// const API_KEY = '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'


@Injectable()
export class MailService {
  // constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: RegisterDTO) {

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'ranjanbhattarai660@gmail.com', // generated ethereal user
        pass: 'ranjan219', // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
      from: 'ranjanbhattarai660@gmail.com', // sender address
      to: user.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<a href="http://localhost:3000/auth/confirmation/${token}"> Click to verify </a>`, // html body
    })
  }


  async confirmUserConfirmation(user: RegisterDTO, token: string){

  }

}
