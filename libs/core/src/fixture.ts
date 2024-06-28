import { INestApplicationContext } from '@nestjs/common';
import { CreateEventDto } from './events/dto/create-event.dto';
import { PrismaService } from './prisma/prisma-core.service';
import { EventsService } from './events/events-core.service';
import { SpotsService } from './spots/spots-core.service';

export async function fixture(
  app: INestApplicationContext,
  events: CreateEventDto[],
  numSpots: number,
) {
  const prismaService = app.get<PrismaService>(PrismaService);

  await prismaService.reservationHistory.deleteMany({});
  await prismaService.ticket.deleteMany({});
  await prismaService.spot.deleteMany({});
  await prismaService.event.deleteMany({});

  const eventService = app.get(EventsService);
  const spotService = app.get(SpotsService);

  const createdEvents = await Promise.all(
    events.map((event) => eventService.create(event)),
  );

  const spots = [];
  for (let i = 0; i < numSpots; i++) {
    const row = String.fromCharCode(97 + Math.floor(i / 5));
    const column = (i % 5) + 1;
    createdEvents.forEach((event) => {
      spots.push({
        name: `${row}${column}`,
        eventId: event.id,
      });
    });
  }

  await Promise.all(spots.map((spot) => spotService.create(spot)));
}
