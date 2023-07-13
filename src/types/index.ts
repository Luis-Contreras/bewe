export interface signUpTypes {
  name: string;
  email: string;
  password: string;
  image?: string;
}

export interface loginTypes {
  email: string;
  password: string;
}

export interface urlsTypes {
  url: string;
  name: string;
}

export interface userDataTypes {
  email: string;
  name: string;
  location: string;
}
