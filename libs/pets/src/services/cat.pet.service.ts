import { PetService } from './pet.service';

export class CatPetService extends PetService {
  async getPetType(): Promise<string> {
    return 'Cat';
  }
}
