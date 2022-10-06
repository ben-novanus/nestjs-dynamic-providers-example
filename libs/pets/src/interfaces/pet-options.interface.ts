import { ModuleMetadata } from '@nestjs/common';

export interface PetConfigs {
  [key: string]: any;
}

export interface PetToken {
  token: string;
  type: string;
}

export interface PetModuleFactory {
  createPetModuleOptions: () => Promise<PetConfigs> | PetConfigs;
}

export interface PetModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  inject: any[];
  useFactory: (...args: any[]) => Promise<PetConfigs> | PetConfigs;
  petTokens: Array<PetToken>;
}
