import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";

axios.defaults.baseURL = "https://randomuser.me/";
axios.defaults.headers.common["Authorization"] = "Bareer asdas1321";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
