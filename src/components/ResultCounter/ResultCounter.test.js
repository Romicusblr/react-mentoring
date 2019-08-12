import ResultCounter from '.';

describe('ResultCounter', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<ResultCounter />);
    expect(snap).toMatchSnapshot();
  });
});
