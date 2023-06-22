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
      console.log(newFilters)
      console.log(displayList)
      console.log(state.response)

      displayList = state.response.filter(listItem => {
        const generFilter = newFilters.gener ? listItem.gener == newFilters.gener : true
        const discountFilter = newFilters.discount ? (newFilters.discount <= listItem.discount && listItem.discount <= 100) : true
        return generFilter && discountFilter
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
