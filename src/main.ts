import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { PET_DOG_FRED, PET_DOG_BARNEY, PET_CAT_WILMA } from './constants';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dog1Service = app.get(PET_DOG_FRED);
  const dog2Service = app.get(PET_DOG_BARNEY);
  const catService = app.get(PET_CAT_WILMA);

  console.log('\n\n');
  console.log('These are my pets:');
  console.log(
    'The first pet is named ' +
      (await dog1Service.getPetName()) +
      ' and he is a ' +
      (await dog1Service.getPetType())
  );
  console.log(
    'The second pet is named ' +
      (await dog2Service.getPetName()) +
      ' and he is a ' +
      (await dog2Service.getPetType())
  );
  console.log(
    'The third pet is named ' +
      (await catService.getPetName()) +
      ' and she is a ' +
      (await catService.getPetType())
  );
  console.log('\n\n');

  await app.close();

  process.exit(1);
}
bootstrap();
