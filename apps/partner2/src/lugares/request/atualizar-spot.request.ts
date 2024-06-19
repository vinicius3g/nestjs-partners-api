import { PartialType } from '@nestjs/mapped-types';
import { CriarSpotRequest } from './criar-spot.request';

export class AtualizarSpotRequest extends PartialType(CriarSpotRequest) {}
