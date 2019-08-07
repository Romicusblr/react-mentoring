import ButtonRaised from '.';

fdescribe('ButtonRaised', () => {
  it('should be selectable by class "buttonRaised"', () => {
    expect(shallow(<ButtonRaised />).is('.buttonRaised')).toBe(true);
  });

  it('should match to snapshot', () => {
    const snap = shallow(<ButtonRaised />);
    expect(snap).toMatchSnapshot();
  });
});
