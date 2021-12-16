import { createStore } from "vuex";
import axios from "axios";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export interface Store {
  shopData: Product[];
  shopCategories: string[];
  searchQueue: string;
  activeCategory: string | undefined
}

export default createStore<Store>({
  state: {
    shopData: [],
    shopCategories: [],
    searchQueue: "",
    activeCategory: undefined
  },
  mutations: {
    setShopData(state, payload) {
      state.shopData = payload;
    },
    setShopCategories(state, payload) {
      state.shopCategories = payload;
    },
    setSearch(state, payload) {
      state.searchQueue = payload;
    },
    setActiveCategory(state, payload){
      state.activeCategory = payload
    }
  },
  actions: {
    async getShopData(state) {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      state.commit("setShopData", data);
    },
    async getShopCategories(state) {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      state.commit("setShopCategories", data);
    },
    actionSearchValue(state, data) {
      state.commit("setSearch", data);
    },
    actionCategory(state, data) {
      state.commit("setActiveCategory", data)
    }
  },
  modules: {},
  getters: {
    getShopData: (state) => state.shopData,
    getShopCategories: (state) => state.shopCategories,
    getActiveCategory: (state) => state.activeCategory,
  },
});
