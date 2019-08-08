import SearchBar from '.';

describe('SearchBar', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<SearchBar />);
    expect(snap).toMatchSnapshot();
  });
});
