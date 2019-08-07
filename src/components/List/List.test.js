import List from '.';

fdescribe('List', () => {
  it('should be selectable by class "list"', () => {
    expect(shallow(<List />).is('.list')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<List />);
    expect(snap).toMatchSnapshot();
  });
});
