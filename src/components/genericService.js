import axios from "axios";
axios.defaults.baseURL = "https://restfulapi29.herokuapp.com/api/product";
//axios.defaults.baseURL = "https://restfulapi29.herokuapp.com/api/";
//axios.defaults.baseURL = "http://localhost:4000/api/";
//axios.defaults.baseURL = "mongodb://talhahassan:talhahassan@cluster0-shard-00-00.bbwhb.mongodb.net:27017,cluster0-shard-00-01.bbwhb.mongodb.net:27017,cluster0-shard-00-02.bbwhb.mongodb.net:27017/api?ssl=true&replicaSet=atlas-11f2ie-shard-0&authSource=admin&retryWrites=true&w=majority";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
class GenericService {
  constructor() {}
  get = (url) =>
    new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  post = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  delete = (url) =>
    new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  put = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}
export default GenericService;