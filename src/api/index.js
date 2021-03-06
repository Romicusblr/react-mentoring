const baseUrl = 'https://reactjs-cdp.herokuapp.com';

export default {
  getMovies(query) {
    return fetch(`${baseUrl}/movies${query ? `${query}&sortOrder=asc` : ''}`)
      .then(res => res.json());
  },
  getMovie(id) {
    return fetch(`${baseUrl}/movies/${id}`)
      .then(res => res.json());
  },
};
