import sendRequest from "./send-request";

const BASE_URL = "/api/posts";

export function allPosts() {
  return sendRequest(`${BASE_URL}`);
}

export function getPost(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function createNewPost(postData) {
  return sendRequest(`${BASE_URL}`, "POST", postData);
}

export function deletePost(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE", { id });
}

export function updatePost(id, postData) {
  return sendRequest(`${BASE_URL}/${id}`, "PATCH", postData);
}

export function addLike(id) {
  return sendRequest(`${BASE_URL}/${id}/like`, "POST");
}
