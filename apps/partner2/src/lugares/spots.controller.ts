import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { SpotsService } from '@app/core/spots/spots-core.service';
import { CriarSpotRequest } from './request/criar-spot.request';
import { AtualizarSpotRequest } from './request/atualizar-spot.request';

@Controller('eventos/:eventId/lugares')
export class SpotsController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() criarSpotRequest: CriarSpotRequest,
    @Param('eventId') eventId: string,
  ) {
    return this.spotsService.create({ ...criarSpotRequest, eventId });
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.spotsService.findAll(eventId);
  }

  @Get(':spotId')
  findOne(@Param('spotId') spotId: string, @Param('eventId') eventId: string) {
    return this.spotsService.findOne(eventId, spotId);
  }

  @Patch(':spotId')
  update(
    @Param('spotId') spotId: string,
    @Param('eventId') eventId: string,
    @Body() atualizarSpotRequest: AtualizarSpotRequest,
  ) {
    return this.spotsService.update(eventId, spotId, atualizarSpotRequest);
  }

  @HttpCode(204)
  @Delete(':spotId')
  remove(@Param('spotId') spotId: string, @Param('eventId') eventId: string) {
    return this.spotsService.remove(eventId, spotId);
  }
}
