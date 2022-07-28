export type ReviewType = {
  reviewId: number;
  review: ReviewInfo[];
}

export type ReviewInfo = {
  avatar: string;
  name: string;
  message: string;
  rate: number;
  date: string;
}

export type Review = ReviewType;
