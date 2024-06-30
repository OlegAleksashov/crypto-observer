export type Category = {
  category_id: string;
  name: string;
};

export type UserType = {
  message: string;
  token: string;
  user: {
    name: string;
    id: number;
    email: string;
  };
};
