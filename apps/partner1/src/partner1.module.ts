import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { SpotsModule } from './spots/spots.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@app/core/prisma/prisma-core.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.partner1' }),
    PrismaModule,
    EventsModule,
    SpotsModule,
  ],
})
export class Partner1Module {}
