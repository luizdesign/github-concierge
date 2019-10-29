interface Session {
  accessToken: string;
}

declare namespace Express {
  export interface Request {
    session: Session;
  }
}
