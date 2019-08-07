import SearchInput from '.';

fdescribe('SearchInput', () => {
  it('should be selectable by class "input"', () => {
    expect(shallow(<SearchInput />).is('.input')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<SearchInput />);
    expect(snap).toMatchSnapshot();
  });
});
