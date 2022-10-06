import { Injectable, Inject, Scope } from '@nestjs/common';
import { PetInterface } from '../interfaces/pet.interface';

import { PET_CONFIGS } from '../constants';

import { PetConfigs } from '../interfaces/pet-options.interface';

@Injectable({
  scope: Scope.TRANSIENT
})
export class PetService implements PetInterface {
  token: string;

  constructor(
    @Inject(PET_CONFIGS)
    private readonly petConfigs: PetConfigs
  ) {}

  setToken(token: string) {
    this.token = token;
  }

  async getServiceTypeDescription(): Promise<string> {
    return 'default';
  }

  async getPetName(): Promise<string> {
    return this.petConfigs[this.token];
  }
}
