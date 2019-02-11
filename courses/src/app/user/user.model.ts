export interface User {
  id: string;
  fakeToken: string;
  name: {
    first: string;
    last: string
  };
  login: string;
  password: string;
}
