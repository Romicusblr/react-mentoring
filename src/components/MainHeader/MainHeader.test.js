import MainHeader from '.';

describe('MainHeader', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<MainHeader />);
    expect(snap).toMatchSnapshot();
  });
});
