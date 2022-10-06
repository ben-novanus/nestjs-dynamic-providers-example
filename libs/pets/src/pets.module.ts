import { Module, DynamicModule, Global, Provider } from '@nestjs/common';
import { PetModuleAsyncOptions } from './interfaces/pet-options.interface';

import { createPetProviders } from './pet.providers';

import { PET_CONFIGS } from './constants';

@Global()
@Module({})
export class PetsModule {
  public static forRootAsync(options: PetModuleAsyncOptions): DynamicModule {
    const petConfigs: Provider = {
      provide: PET_CONFIGS,
      useFactory: options.useFactory,
      inject: options.inject
    };

    const petProviders = createPetProviders(options);

    return {
      module: PetsModule,
      providers: [petConfigs, ...petProviders],
      exports: [...petProviders]
    };
  }
}
