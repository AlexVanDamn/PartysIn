export interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email?: string;
  picture?: string;
  createdAt: Date;
}
