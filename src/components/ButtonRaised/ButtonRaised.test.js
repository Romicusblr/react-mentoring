import ButtonRaised from '.';

describe('ButtonRaised', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<ButtonRaised>text</ButtonRaised>);
    expect(snap).toMatchSnapshot();
  });
});
