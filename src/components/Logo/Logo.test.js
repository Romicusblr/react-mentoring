import Logo from '.';

describe('Logo', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<Logo />);
    expect(snap).toMatchSnapshot();
  });
});
