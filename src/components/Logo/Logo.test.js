import Logo from '.';

fdescribe('Logo', () => {
  it('should be selectable by class "logo"', () => {
    expect(shallow(<Logo />).is('.logo')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<Logo />);
    expect(snap).toMatchSnapshot();
  });
});
