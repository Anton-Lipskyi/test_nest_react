import {IsNotEmpty, IsOptional} from 'class-validator';

export class CreateImageDto {
    @IsNotEmpty()
    albumId: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    url: string;

    @IsOptional()
    thumbnailUrl: string;


}
