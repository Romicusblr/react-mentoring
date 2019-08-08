import Header from '.';

describe('Header', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<Header />);
    expect(snap).toMatchSnapshot();
  });
});
