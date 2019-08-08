import MovieDetails from '.';
import fakeMovies from '../../../__mocks__/fakeMovies';

const { data: [fakeMovie] } = fakeMovies;

describe('MovieDetails', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<MovieDetails movie={fakeMovie} />);
    expect(snap).toMatchSnapshot();
  });
});
