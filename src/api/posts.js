import { posts } from '.';

export function getPosts(params) {
  return posts.get('/', { params });
}

export function getPostById(id) {
  return posts.get(`/${id}`);
}

export function createPost(data) {
  return posts.post('', data);
}

export function updatePost(id, data) {
  return posts.patch(`/${id}`, data);
  // put은 전체데이터를 수정하는 것이기 때문에 공백값이 있으면 그대로 읽어버리는 것이기때문에
  // 등록일이 수정시에 사라지고, patch는 일부분을 수정하는것이기 때문에 값이 넘어오는 것들에 대해서
  // 수정하는 메서드이다.
}

export function DeletePost(id) {
  return posts.delete(`/${id}`);
}
