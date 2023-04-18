

const arrays = {
  array: [],
};
export const reducer2 = (state = arrays, action) => {
  if (action.type === "addItem") {
    return { array: [...state.array, ...action.payload] };
  } 
  else if (action.type === "deleteItem") {
    return { array: [] };
  } 
  else {
    return state;
  }
};