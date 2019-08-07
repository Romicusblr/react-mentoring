import Header from '.';

fdescribe('Header', () => {
  it('should be selectable by class "header"', () => {
    expect(shallow(<Header />).is('.header')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<Header />);
    expect(snap).toMatchSnapshot();
  });
});
