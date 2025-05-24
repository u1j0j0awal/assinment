import { Module, Global } from '@nestjs/common';
import { GoogleOAuthService } from './google-oauth.service';

@Global()
@Module({
  providers: [GoogleOAuthService],
  exports: [GoogleOAuthService],
})
export class GoogleOAuthModule {}
