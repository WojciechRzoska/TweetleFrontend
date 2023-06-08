import { User } from './UserInterface';

export interface IPost {
  id: number;
  createdAt: Date;
  content: string;
  photo: string;
  user?: User;
}
