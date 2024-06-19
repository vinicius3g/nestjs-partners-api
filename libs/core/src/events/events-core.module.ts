import { Module } from '@nestjs/common';
import { EventsService } from './events-core.service';

@Module({
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsCoreModule {}
