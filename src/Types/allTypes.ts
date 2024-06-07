export type userType = {
  name: string;
  age: number;
  // id:string
};

// it will group both the userType and the id properties and make them as a single TS type

export type withIdUserType = userType & {
  id: string;
};

export type updateUserType = {
  id: number;
  name: string;
  age: number;
};
