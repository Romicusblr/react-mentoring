import HeaderMovieDetails from '.';

fdescribe('HeaderMovieDetails', () => {
  it('should be selectable by class "headerMovieDetails"', () => {
    expect(shallow(<HeaderMovieDetails />).is('.headerMovieDetails')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<HeaderMovieDetails />);
    expect(snap).toMatchSnapshot();
  });
});
