import { Module, Res } from '@nestjs/common';
import { ResponseService } from './response/response.service';

@Module({
  providers: [ResponseService],
  exports: [ResponseService]
})
export class CommonModule {}
