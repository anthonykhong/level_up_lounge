import sendRequest from "./send-request";

const BASE_URL = "/api/posts";

export function allPost() {
  return sendRequest(`${BASE_URL}`);
}

export function getPost(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function createPost(postData) {
  return sendRequest(`${BASE_URL}`, "POST", postData);
}

export function deletePost() {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function updatePost() {
  return sendRequest(`${BASE_URL}/${id}`);
}
