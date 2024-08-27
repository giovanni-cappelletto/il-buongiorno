export interface Data {
  title: string;
  month: string;
  edition: number;
  year: number;
  pages: number;
  thumbnail?: File;
  pdf?: File;
}

export type DialogInfo = {
  isOpen: boolean;
  periodical: Data;
};

export type UserInfo = {
  email: string,
  password: string
}