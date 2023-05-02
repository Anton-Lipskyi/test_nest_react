import { Dependencies, Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Image } from './entities/image.entity';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
@Dependencies(HttpService)
export class ImagesService {
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(Image) private readonly repository: Repository<Image>,
  ) {}

  async PopulateDb() {
    // return `This action returns all images`;
    const photosUrl = process.env.PHOTOS_URL;
    const imagesUrl = process.env.IMAGES_URL;
    try {
      const photosResponse = await this.httpService.axiosRef.get(photosUrl);
      const imagesResponse = await this.httpService.axiosRef.get(imagesUrl);

      const images = imagesResponse.data.flat().map((image) => {
        return {
          albumId: image.albumId,
          title: image.title,
          url: image.path,
        };
      });
      const photos = photosResponse.data.flat().map((photo) => {
        return {
          albumId: photo.albumId,
          title: photo.title,
          url: photo.url,
          thumbnailUrl: photo.thumbnailUrl,
        };
      });
      const mergedData = images.concat(photos);
      await this.repository.save(mergedData);
      return mergedData;
    } catch (err) {
      console.log(err);
    }
  }

  async findAll(): Promise<any[]> {
    return this.repository.find();
  }

  async create(createImageDto: CreateImageDto): Promise<any> {
    return this.repository.save(createImageDto);
  }

  async findOne(id: number): Promise<any> {
    const image = await this.repository.findOne({
      where: { id: id },
    });
    if (!image) {
      throw new NotFoundException('Image with such id not found');
    }
    return image;
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    const image = await this.repository.findOne({
      where: { id: id },
    });
    if (!image) {
      throw new NotFoundException('Image with such id not found');
    }
    const data = {
      ...image,
      ...updateImageDto,
    };
    await this.repository.save(data);
    return data;
  }

  async remove(id): Promise<any> {
    const result = await this.repository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();

    if (!result) {
      throw new NotFoundException('Image with such id not found');
    }

    return result;
  }
}
