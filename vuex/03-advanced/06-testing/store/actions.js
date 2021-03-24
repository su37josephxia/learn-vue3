import shop from "../api/shop";

export default {
  getAllProducts: ({ commit }) => {
    commit("REQUEST_PRODUCTS");
    shop.getProducts((products) => {
      commit("RECEIVE_PRODUCTS", products);
    });
  },
};
