export interface IPhoto {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComents: boolean;
  likes: number;
  comments: number;
  userId: number;
}
