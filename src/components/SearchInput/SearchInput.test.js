import SearchInput from '.';

describe('SearchInput', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<SearchInput />);
    expect(snap).toMatchSnapshot();
  });
});
