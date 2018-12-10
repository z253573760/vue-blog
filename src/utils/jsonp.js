import orginJSONP from "jsonp";
import qs from "qs";
export default function jsonp(url, data, option) {
  url = `${url}?${qs.stringify(data)}`;
  return new Promise((resolve, reject) => {
    orginJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}
