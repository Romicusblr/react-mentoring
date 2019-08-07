import RadioSwitch from '.';

fdescribe('RadioSwitch', () => {
  it('should be selectable by class "radioSwitch"', () => {
    expect(shallow(<RadioSwitch />).is('.radioSwitch')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<RadioSwitch />);
    expect(snap).toMatchSnapshot();
  });
});
