export interface IEnvironment {
  app: {
    port: number;
  };
  db: {
    uri: string;
  };
  isValid: () => boolean;
}
