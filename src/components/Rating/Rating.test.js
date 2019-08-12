import Rating from '.';

describe('Rating', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<Rating>7.0</Rating>);
    expect(snap).toMatchSnapshot();
  });
});
