import RadioSwitch from '.';
import RadioButton from '../RadioButton';

describe('RadioSwitch', () => {
  it('should match to snapshot', () => {
    const snap = shallow(
      <RadioSwitch title="radio">
        <RadioButton value="value" />
      </RadioSwitch>,
    );
    expect(snap).toMatchSnapshot();
  });
});
