class ApiCalls {
apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

contentType = { 'content-type': 'application/json' };

gameId = 'ggvqCcEZZvDyXFe66IY5';

postScore = async (user, score) => {
  const response = await fetch(`${this.apiUrl}${this.gameId}/scores/`, {
    method: 'POST',
    headers: this.contentType,
    body: JSON.stringify({ user, score }),
  });
  return response.json();
};

getScores = async () => {
  const response = await fetch(`${this.apiUrl}${this.gameId}/scores/`, {
    method: 'GET',
    headers: this.contentType,
  });
  return response.json();
};
}

export default ApiCalls;
