import List from '.';
import fakeMovies from '../../../__mocks__/fakeMovies';

const { data: [{ genres }] } = fakeMovies;

describe('List', () => {
  it('should match to empty snapshot', () => {
    const snap = shallow(<List />);
    expect(snap).toMatchSnapshot();
  });

  it('should match to snapshot with data', () => {
    const snap = shallow(<List items={genres} limit={2} />);
    expect(snap).toMatchSnapshot();
  });
});
