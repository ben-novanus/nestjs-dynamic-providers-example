export interface PetInterface {
  setToken(token: string);
  getServiceTypeDescription(): Promise<string>;
}
