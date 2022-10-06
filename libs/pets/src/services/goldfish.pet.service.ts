import { PetService } from './pet.service';

export class GoldfishPetService extends PetService {
  async getPetType(): Promise<string> {
    return 'Goldfish';
  }
}
