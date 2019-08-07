import ResultCounter from '.';

fdescribe('ResultCounter', () => {
  it('should be selectable by class "resultCounter"', () => {
    expect(shallow(<ResultCounter />).is('.resultCounter')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<ResultCounter />);
    expect(snap).toMatchSnapshot();
  });
});
