import axios from "axios";
import Router from "next/router";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    console.log("apakah ini jalan");
    const result = await axios.post("http://localhost:4000/v1/users/login", data);
    const user = result.data;
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    console.log("apakah ini jalan");
    Router.push("/AddRecipe");
  } catch (erorr) {
    console.log(erorr);
  }
};
