export interface DashBoardData {
  allCoins: Array<object>;
  categories: Array<Category>;
  exchanges: Array<object>;
  assetPlatforms: Array<object>;
}

export type Category = {
  category_id: string;
  name: string;
};
