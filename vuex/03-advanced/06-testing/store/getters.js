export const getters = {
  filteredProducts(state, { filterCategory }) {
    return state.products.filter((product) => {
      return product.category === filterCategory;
    });
  },
};
