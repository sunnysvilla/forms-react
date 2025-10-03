export interface KYC {
  name: string;
  phone: number;
  guests: number;
  ids: string[];
  arrival: string;
  property: string;
}

export interface KYCResponse extends KYC {
  _id: string;
}
