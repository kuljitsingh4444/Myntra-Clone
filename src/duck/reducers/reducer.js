import Types from "../types";

const initialState = {
  response: [],
  filters: {},
  displayList: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.UPDATE_RESPONSE:
      return {
        ...state,
        response: action.data,
        displayList: action.data
      };

    case Types.UPDATE_FILTERS:
      let displayList = []

      const newFilters = { 
        ...state.filters,
        [action.data.field] : action.data.value
      }
      
      console.log("checkit")
      console.log(action)
      console.log(newFilters)
      console.log(displayList)
      console.log(state.response)

      displayList = state.response.filter(listItem => {
        const generFilter = newFilters.gener && newFilters.gener ? listItem.gener == newFilters.gener : true
        const discountFilter = newFilters.discount && newFilters.discount ? (newFilters.discount <= listItem.discount && listItem.discount <= 100) : true
        const categoriesFilter = newFilters.categories && newFilters.categories.length ? newFilters.categories.includes(listItem.category) : true
        const brandsFilter = newFilters.brands && newFilters.brands.length ? newFilters.brands.includes(listItem.brand) : true
        const colorsFilter = newFilters.colors && newFilters.colors.length ? newFilters.colors.includes(listItem.color) : true

        return generFilter && discountFilter && categoriesFilter && brandsFilter && colorsFilter
      })


      return {
        ...state,
        response: state.response,
        filters: newFilters,
        displayList
      }

    default:
      return state;
  }
}
