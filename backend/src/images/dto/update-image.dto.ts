import { PartialType } from '@nestjs/mapped-types';
import { CreateImageDto } from './create-image.dto';

export class UpdateImageDto extends PartialType(CreateImageDto) {
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
