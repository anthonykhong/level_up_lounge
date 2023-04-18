import sendRequest from "./send-request";

const BASE_URL = "/api/posts";

export function getComments(postId) {
  return sendRequest(`${BASE_URL}/${postId}/comments`);
}

export function addComment(postId, commentData) {
  console.log(postId);
  return sendRequest(`${BASE_URL}/${postId}/comments`, "POST", commentData);
}

export function deleteComment(postId, commentId) {
  return sendRequest(`${BASE_URL}/${postId}/comments/${commentId}`, "DELETE");
}
