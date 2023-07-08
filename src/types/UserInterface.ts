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
  registerEmail: string;
  avatar: string | null;
  registerPassword: string;
  password_confirmation: string;
  year: number;
  month: number;
  day: number;
  bio?: string;
}

export interface ValidationPageOne {
  nickname: string;
  email: string;
  avatar: File;
  password: string;
  confirmedPassword: string;
}
