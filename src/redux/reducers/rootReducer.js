const { combineReducers } = require("redux");
const { default: filterReducer } = require("./filterReducer");
const { default: productReducer } = require("./productReducer");

const rootReducer = combineReducers({
    products: productReducer,
    filteredProducts: filterReducer,
});

export default rootReducer;