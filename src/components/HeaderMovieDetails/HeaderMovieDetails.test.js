import HeaderMovieDetails from '.';
import fakeMovies from '../../../__mocks__/fakeMovies';

const { data: [fakeMovie] } = fakeMovies;

describe('HeaderMovieDetails', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<HeaderMovieDetails movie={fakeMovie} />);
    expect(snap).toMatchSnapshot();
  });
});
