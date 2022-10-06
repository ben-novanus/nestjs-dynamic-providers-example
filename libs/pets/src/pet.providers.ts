import { Provider } from '@nestjs/common';

import { PetService } from './services/pet.service';
import { DogPetService } from './services/dog.pet.service';
import { CatPetService } from './services/cat.pet.service';
import { GoldfishPetService } from './services/goldfish.pet.service';

import {
  PetModuleAsyncOptions,
  PetConfigs,
  PetToken
} from './interfaces/pet-options.interface';

import {
  PET_CONFIGS,
  PET_TYPE_DOG,
  PET_TYPE_CAT,
  PET_TYPE_GOLDFISH
} from './constants';

function petFactory(petToken: PetToken, options: PetConfigs) {
  let petService: PetService;

  switch (petToken.type) {
    case PET_TYPE_DOG:
      petService = new DogPetService(options);
      break;
    case PET_TYPE_CAT:
      petService = new CatPetService(options);
      break;
    case PET_TYPE_GOLDFISH:
      petService = new GoldfishPetService(options);
      break;
    default:
      throw new Error('Unknown pet type: ' + petToken.type);
  }
  petService.setToken(petToken.token);
  return petService;
}

function createPetProvider(
  petToken: PetToken,
  options: PetModuleAsyncOptions
): Provider<PetService> {
  const provider: Provider = {
    inject: [PET_CONFIGS],
    provide: petToken.token,
    useFactory: async (options: PetConfigs) => petFactory(petToken, options)
  };
  return provider;
}

export function createPetProviders(
  options: PetModuleAsyncOptions
): Array<Provider<PetService>> {
  return options.petTokens.map((petToken) =>
    createPetProvider(petToken, options)
  );
}
