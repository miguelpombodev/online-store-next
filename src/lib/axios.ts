import axios from "axios";
import { Agent } from "https";

const httpsAgent = new Agent({
  /*This way shall not be done, search for security certificate

    See more in the link below:
    https://stackoverflow.com/questions/51363855/how-to-configure-axios-to-use-ssl-certificate
  */
  rejectUnauthorized: false,
});

export const api = axios.create({
  baseURL: "https://localhost:7060/v1",
  httpsAgent: httpsAgent,
});
