import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityDto } from './create-activity.dto';

export class UpdateAcitivityDto extends PartialType(CreateActivityDto) {}
