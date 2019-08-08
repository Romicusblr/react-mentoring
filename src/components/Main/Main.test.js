import Main from '.';
import fakeMovies from '../../../__mocks__/fakeMovies';

describe('Main', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<Main data={fakeMovies} />);
    expect(snap).toMatchSnapshot();
  });
});
