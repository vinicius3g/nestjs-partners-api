import { PrismaModule } from '@app/core/prisma/prisma-core.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './eventos/events.module';
import { SpotsModule } from './lugares/spots.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.partner1' }),
    PrismaModule,
    EventsModule,
    SpotsModule,
  ],
})
export class Partner2Module {}
