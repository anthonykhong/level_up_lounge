import sendRequest from "./send-request";

const BASE_URL = "/api/games";

export function getGames() {
  return sendRequest(`${BASE_URL}`);
}
