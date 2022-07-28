export type ReviewType = {
  id: number;
  review: ReviewInfo[];
}

export type ReviewInfo = {
  avatar: string;
  name: string;
  message: string;
  rate: number;
  date: string;
}

