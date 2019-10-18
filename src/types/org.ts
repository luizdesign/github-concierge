export interface Org {
  name: string;
  description: string;
  avatarUrl: string;
}

export interface OrgsList {
  [index: number]: Org;
}
