import RadioButton from '.';

fdescribe('RadioButton', () => {
  it('should be selectable by class "radioButton"', () => {
    expect(shallow(<RadioButton />).is('.radioButton')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<RadioButton />);
    expect(snap).toMatchSnapshot();
  });
});
