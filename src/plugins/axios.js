import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://api-meme-zendvn-01.herokuapp.com/api/",
  //timeout: 1000,trong 1s nếu sever không trả dl về thì báo lỗi
  headers: { accept: "application/json" }
});


export default axiosInstance;
