export type IResponse =  {
  status: number;
  statusText: string;
  headers: Record<string, string>[] | Record<string, string>;
  ok: boolean;
  redirected: boolean;
  type: string;
  url: string;
}
