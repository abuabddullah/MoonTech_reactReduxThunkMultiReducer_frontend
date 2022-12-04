import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

/** TOGGLE_BRAND
 * main function: কোন ব্র্যান্ড এ একটা ক্লিক করলে সেটা ক্লিকড থাকবে আর আরেকবার ক্লিক করলে সেটা আনক্লিকড হবে। এবং তদানুযায়ী সেটা ফিল্টার করে দেখাবে।
 * করোনীয়ঃ
 * 1. যেই ব্রান্ডে ক্লিক করা হবে তার নাম যদি আগে থেকে  brands[] এ না থাকে তাহলে সেটা যোগ করে দিবে।
 * 2. যদি আগে থেকে থাকে তাহলে সেটা ফিল্টার করে brands[] এ থেকে বাদ দিবে।
  */


/** TOGGLE_STOCK
 * main function: শুরতে stocks এর মান হবে true। এবং in-stocked products গুলো ফিল্টার করে দেখাবে। আর যদি আরেকবার ক্লিক করা হয় তাহলে stocks এর মান হবে false। এবং out-stocked products গুলো ফিল্টার করে দেখাবে।
 * করোনীয়ঃ
 * 1. toggle করে এক ক্লিকে stock এর value বদলে false হবে আবার পরের ক্লিকে true হবে।
  */

const initialState = {
  filters: {
    brands: [],
    stocks: false,
  },
  keyword: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BRAND:
      if (!state.filters.brands.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: [...state.filters.brands, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: state.filters.brands.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
      }

    case TOGGLE_STOCK:
      return {
        ...state,
        filters: {
          ...state.filters,
          stocks: !state.filters.stocks,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
