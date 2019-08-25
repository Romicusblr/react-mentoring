import querystring from 'querystring';

const baseUrl = 'https://reactjs-cdp.herokuapp.com';

export default {
  getMovies(params) {
    return fetch(`${baseUrl}/movies?${querystring.stringify(params)}`)
      .then(res => res.json());
  },
  getMovie(id) {
    return fetch(`${baseUrl}/movies/${id}`)
      .then(res => res.json());
  },
};
