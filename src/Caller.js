import axios from 'axios';
import config from './configs/config';

const API_URL = config.API_URL;

// const headers = {
//   "Content-Type": "application/json",
//   Authorization: config.AUTH,
// };

export async function fetch_data_stream() {
  const data_stream = await axios.get(`${API_URL}/get/main/stream`);
  return data_stream;
}