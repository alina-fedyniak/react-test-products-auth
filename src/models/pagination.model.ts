export enum PaginationFields {
  PAGE = 'page',
  TO = 'to',
}

export interface IPagination {
  total: number;
  to: number;
  per_page: number;
}

export type TPaginationFields = keyof IPagination;
export const paginationFields = [
  'total',
  'to',
  'per_page',
] as TPaginationFields[];

export interface IPaginationDTO {
  [PaginationFields.PAGE]?: number;
  [PaginationFields.TO]?: number;
}
