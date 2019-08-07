import LabelRaised from '.';

fdescribe('LabelRaised', () => {
  it('should be selectable by class "labelRaised"', () => {
    expect(shallow(<LabelRaised />).is('.labelRaised')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<LabelRaised />);
    expect(snap).toMatchSnapshot();
  });
});
