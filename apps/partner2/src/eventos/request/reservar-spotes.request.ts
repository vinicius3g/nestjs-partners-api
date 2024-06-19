import { TicketKind } from '@prisma/client';

export class ReservarSpotRequest {
  spots: string[];
  ticket_kind: TicketKind;
  email: string;
}
