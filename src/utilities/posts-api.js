import sendRequest from "./send-request";

const BASE_URL = "/api/posts";

export function allPosts() {
  return sendRequest(`${BASE_URL}`);
}

export function getPost(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function createPost(postData) {
  return sendRequest(`${BASE_URL}`, "POST", postData);
}

export function deletePost(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE", { id });
}

export function updatePost(id, postData) {
  return sendRequest(`${BASE_URL}/${id}`, "PATCH", postData);
}
