import Main from '.';

fdescribe('Main', () => {
  it('should be selectable by class "main"', () => {
    expect(shallow(<Main />).is('.main')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<Main />);
    expect(snap).toMatchSnapshot();
  });
});
