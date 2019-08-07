import MainHeader from '.';

fdescribe('MainHeader', () => {
  it('should be selectable by class "mainHeader"', () => {
    expect(shallow(<MainHeader />).is('.mainHeader')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<MainHeader />);
    expect(snap).toMatchSnapshot();
  });
});
