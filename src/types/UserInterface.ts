export interface User {
  id: number;
  nickname: string;
  email: string;
  email_verified_at?: Date;
  avatar: string;
  created_at: Date;
  updated_at: Date;
}

export interface RegisterUser {
  nickname: string;
  email: string;
  avatar: File;
  password: string;
  confirmedPassword: string;
  year: number;
  month: number;
  day: number;
  bio?: string;
}
