import axios from "axios";

export const GetTheToken = () => {
    const token = localStorage.getItem("token");
  //Here im creating a reusuable template pretty much to be able to work moving forward with this authenticated API

    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            Authorization: token
        }
    })
}