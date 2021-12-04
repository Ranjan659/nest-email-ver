import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';

import { UserSchema } from 'src/models/user.schema';
import { TokenSchema } from 'src/models/token.schema';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Token', schema: TokenSchema }
  ]),
    MailModule
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
