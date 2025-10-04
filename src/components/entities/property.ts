export interface Property {
  name: string;
  mail: string;
  docs: string[];
}

export interface PropertyResponse extends Property {
  _id: string;
}
