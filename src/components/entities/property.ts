export interface Property {
  name: string;
  mail: string;
  pdf_file: string;
}

export interface PropertyResponse extends Property {
  _id: string;
  checkinDocPreview: string;
  createdAt: string;
  link: string;
  slug: string;
}
