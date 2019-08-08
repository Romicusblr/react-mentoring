import RadioButton from '.';

describe('RadioButton', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<RadioButton value="value" />);
    expect(snap).toMatchSnapshot();
  });
});
