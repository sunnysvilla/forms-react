export interface KYCResponse {
  name: string;
  phone: number;
  guests: number;
  ids: string[];
  arrival: string;
  property: string;
  _id: string;
}

export interface AddKYC {
  name: string;
  phone: string;
  guests: number;
  arrival: string;
  slug: string;
  pdf_file: File[];
}
