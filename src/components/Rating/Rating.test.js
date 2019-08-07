import Rating from '.';

fdescribe('Rating', () => {
  it('should be selectable by class "rating"', () => {
    expect(shallow(<Rating />).is('.rating')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<Rating />);
    expect(snap).toMatchSnapshot();
  });
});
