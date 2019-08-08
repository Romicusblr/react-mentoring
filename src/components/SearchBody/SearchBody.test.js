import SearchBody from '.';
import fakeMovies from '../../../__mocks__/fakeMovies';

describe('SearchBody', () => {
  it('should match to empty snapshot', () => {
    const snap = shallow(<SearchBody />);
    expect(snap).toMatchSnapshot();
  });

  it('should match to snapshot with content', () => {
    const snap = shallow(<SearchBody movies={fakeMovies.data} />);
    expect(snap).toMatchSnapshot();
  });
});
