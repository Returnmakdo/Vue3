import axios from 'axios';

axios.defaults.withCredentials = true;

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }, options), {
    withCredentials: true,
  });
  return instance;
}

// 현재 개발모드이기 때문에 .env.development에 있는 env파일을 참조함
// build일때는 .env에 있는 product 주소를 가져오게 된다.
export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);
