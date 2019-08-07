import MovieYear from '.';

fdescribe('MovieYear', () => {
  it('should be selectable by class "movieYear"', () => {
    expect(shallow(<MovieYear />).is('.movieYear')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<MovieYear />);
    expect(snap).toMatchSnapshot();
  });
});
