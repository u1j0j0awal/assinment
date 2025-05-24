import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleOAuthModule } from './google-oauth.module';

@Module({
  imports: [GoogleOAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
