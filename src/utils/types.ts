export interface Data {
  readonly id: number;
  title: string;
  month: string;
  edition: number;
  year: number;
  pages: number;
}

export type DialogInfo = {
  isOpen: boolean;
  periodical: Data;
};
