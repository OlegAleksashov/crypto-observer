import { ReactNode } from "react";
import { ValidationResult } from "joi";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { Category, UserType } from "../types/common";

export interface DashBoardData {
  allCoins: Array<object>;
  categories: Array<Category>;
  exchanges: Array<object>;
  assetPlatforms: Array<object>;
}

// ================== To authReducer.ts ====================== //

export interface AuthState {
  loading: boolean;
  error: string;
  user: UserType | {};
  isAuth: boolean;
  token: string | null;
}

// ================== To action.ts ====================== //

export interface CoinData {
  data: Array<object>;
}

export interface ApiResponse<T> {
  data: T;
}

export interface UserData {
  email: string;
  password: string;
}

export interface UserResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  message: string;
}

export interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

// ================== To registerValidation.ts ====================== //

export interface Validator<T> {
  (payload: T): ValidationResult;
}

// ================== To PersonalCard.tsx ====================== //

export interface IPersonalCard {
  text: string;
  value: String | number;
  color: string;
  icon: IconDefinition;
}

// ================== To AreaChartCurrency.tsx ====================== //

export interface CoinAth {
  name: string;
  ath: number;
}

// ================== To AreaChartLowCurrency.tsx ====================== //

export interface CoinAtl {
  name: string;
  atl: number;
}

// ================== To BarChartCurrency.tsx ====================== //

export interface CoinPrice {
  name: string;
  current_price: number;
}

// ================== To InnerPieChartCurrency.tsx ====================== //

export interface CoinCurrentPrice {
  name: string;
  current_price: number;
}

// ================== To PieChartCurrency.tsx ====================== //

export interface CoinTotal {
  name: string;
  total_volume: number;
}

// ================== To ButtonExit.tsx ====================== //

export interface IButtonExit {
  onClick: () => void;
}

// ================== To Header.tsx ====================== //

export interface IHomeIcon {
  color: "success";
  onClick: () => void;
}

// ================== To HeaderOfCharts.tsx ====================== //

export interface IHeaderOfCharts {
  children: ReactNode;
  title: String;
  subheader: String;
}

// ================== To InputSearch.tsx ====================== //

export interface IInputSearch {
  onInputChange: (searchValue: string) => void;
}
