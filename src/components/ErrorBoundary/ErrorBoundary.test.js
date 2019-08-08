import ErrorBoundary from '.';

describe('ErrorBoundary', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<ErrorBoundary />);
    expect(snap).toMatchSnapshot();
  });
});
