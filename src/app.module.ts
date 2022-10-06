import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PetsModule, PET_TYPE_DOG, PET_TYPE_CAT } from '@app/pets';

import { PET_DOG_FRED, PET_DOG_BARNEY, PET_CAT_WILMA } from './constants';

/**
 * The root Module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.names.env',
      isGlobal: true
    }),
    PetsModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        PET_DOG_FRED: configService.get<string>('PET_DOG_FRED'),
        PET_DOG_BARNEY: configService.get<string>('PET_DOG_BARNEY'),
        PET_CAT_WILMA: configService.get<string>('PET_CAT_WILMA')
      }),
      petTokens: [
        {
          token: PET_DOG_FRED,
          type: PET_TYPE_DOG
        },
        {
          token: PET_DOG_BARNEY,
          type: PET_TYPE_DOG
        },
        {
          token: PET_CAT_WILMA,
          type: PET_TYPE_CAT
        }
      ]
    })
  ]
})
export class AppModule {}
