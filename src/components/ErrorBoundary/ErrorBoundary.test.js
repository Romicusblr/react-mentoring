import ErrorBoundary from '.';

const Something = () => <h1>Foo</h1>;

describe('ErrorBoundary', () => {
  it('should match to snapshot without error', () => {
    const snap = shallow(<ErrorBoundary><Something /></ErrorBoundary>);
    expect(snap).toMatchSnapshot();
  });

  it('should match to snapshot with error', () => {
    const snap = shallow(<ErrorBoundary><Something /></ErrorBoundary>);
    snap.find(Something).simulateError(new Error());
    expect(snap).toMatchSnapshot();
  });
});
