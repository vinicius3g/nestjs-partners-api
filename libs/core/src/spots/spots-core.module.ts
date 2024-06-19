import { Module } from '@nestjs/common';
import { SpotsService } from './spots-core.service';

@Module({
  providers: [SpotsService],
  exports: [SpotsService],
})
export class SpotsCoreModule {}
