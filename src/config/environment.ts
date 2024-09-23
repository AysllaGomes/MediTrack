import { IEnvironment } from '../models/interface/environment.models';

export const environment: IEnvironment = {
  app: {
    port: 3000,
  },
  db: {
    uri: process.env.BD_URI || 'mongodb://localhost/medireminder',
  },
  isValid(): boolean {
    return true;
  },
};
