import MovieCard from '.';

fdescribe('MovieCard', () => {
  it('should be selectable by class "movieCard"', () => {
    expect(shallow(<MovieCard />).is('.movieCard')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<MovieCard />);
    expect(snap).toMatchSnapshot();
  });
});
