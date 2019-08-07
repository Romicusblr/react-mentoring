import SearchBody from '.';

fdescribe('SearchBody', () => {
  it('should be selectable by class "searchBody"', () => {
    expect(shallow(<SearchBody />).is('.searchBody')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<SearchBody />);
    expect(snap).toMatchSnapshot();
  });
});
