import Footer from '.';

fdescribe('Footer', () => {
  it('should be selectable by class "footer"', () => {
    expect(shallow(<Footer />).is('.footer')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<Footer />);
    expect(snap).toMatchSnapshot();
  });
});
