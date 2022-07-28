export type OfferType = {
  offerId: number;
  data: OfferDescription;
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

export type Offer = OfferType;
