import axios from 'axios';

const API = 'https://gank.io/api/data/福利/';

const get = function get (url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then(response => {
    //   console.log(response)
      resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    });
  });
};

export {get, API};
