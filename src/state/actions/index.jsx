export const addItem = (obj) => {
    return (dispatch) => {
      dispatch({
        type: "addItem",
        payload: obj,
      });
    };
  };
  export const deleteItem = (obj) => {
    return (dispatch) => {
      dispatch({
        type: "deleteItem",
        payload: obj,
      });
    };
  };