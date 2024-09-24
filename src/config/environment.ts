import { IEnvironment } from '../models/interface/environment.models';

export const environment: IEnvironment = {
  app: {
    port: 3000,
  },
  db: {
    uri: process.env.DB_URI,
  },
  isValid(): boolean {
    return true;
  },
};
