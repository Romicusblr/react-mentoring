import LabelRaised from '.';

describe('LabelRaised', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<LabelRaised>text</LabelRaised>);
    expect(snap).toMatchSnapshot();
  });
});
