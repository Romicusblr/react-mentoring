import SearchBar from '.';

fdescribe('SearchBar', () => {
  it('should be selectable by class "searchBar"', () => {
    expect(shallow(<SearchBar />).is('.searchBar')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<SearchBar />);
    expect(snap).toMatchSnapshot();
  });
});
