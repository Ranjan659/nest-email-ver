import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './mail.service';
import * as path from 'path';

@Module({
  imports: [
    // MailerModule.forRoot({
    //   transport: {
    //     host: process.env.EMAIL_HOST,
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //       user: process.env.EMAIL_ID, // generated ethereal user
    //       pass: process.env.EMAIL_PASS // generated ethereal password
    //     },
    //   },
    //   defaults: {
    //     from: '"Intern Village" <ranjanbhattarai660@gmail.com>', // outgoing email ID
    //   },
    //   template: {
    //     dir: process.cwd() + '/src/mail/templates/',
    //     adapter: new HandlebarsAdapter(), // or new PugAdapter()
    //     options: {
    //       strict: true,
    //     },
    //   },
    // }),
  ],
  providers: [MailService],
  exports: [MailService], // 👈 export for DI
})
export class MailModule {}
