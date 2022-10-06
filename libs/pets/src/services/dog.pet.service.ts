import { PetService } from './pet.service';

export class DogPetService extends PetService {
  async getPetType(): Promise<string> {
    return 'Dog';
  }
}
