import MovieCard from '.';
import fakeMovies from '../../../__mocks__/fakeMovies';

const { data: [fakeMovie] } = fakeMovies;

describe('MovieCard', () => {
  it('should match to empty snapshot', () => {
    const snap = shallow(<MovieCard />);
    expect(snap).toMatchSnapshot();
  });

  it('should match to snapshot with data', () => {
    const snap = shallow(<MovieCard movie={fakeMovie} />);
    expect(snap).toMatchSnapshot();
  });
});
