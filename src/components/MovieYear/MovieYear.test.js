import MovieYear from '.';

describe('MovieYear', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<MovieYear year={2000} />);
    expect(snap).toMatchSnapshot();
  });
});
