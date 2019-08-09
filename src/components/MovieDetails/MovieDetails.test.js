import MovieDetails from '.';
import fakeMovies from '../../../__mocks__/fakeMovies';

const { data: [fakeMovie] } = fakeMovies;

describe('MovieDetails', () => {
  it('should match to snapshot with data', () => {
    const snap = shallow(<MovieDetails movie={fakeMovie} />);
    expect(snap).toMatchSnapshot();
  });

  it('should match to snapshot without data', () => {
    const snap = shallow(<MovieDetails />);
    expect(snap).toMatchSnapshot();
  });
});
