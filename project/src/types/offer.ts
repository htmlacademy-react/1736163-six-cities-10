export type OfferType = {
  id: number;
  offer: OfferDescription;
}

export type OfferDescription = {
  pictures: string[];
  propertyName: string;
  description: string;
  premium: boolean;
  type: string;
  rate: number;
  bedsCount: number;
  personsCount: number;
  price: number;
  insideList: string[];
  host: HostInfo;
}

export type HostInfo = {
  pro: boolean;
  avatar: string;
  name: string;
}

export type ReviewType = {
  id: number;
  reviewInfo: ReviewInfo[];
}

export type ReviewInfo = {
  avatar: string;
  message: string;
  name: string;
}
