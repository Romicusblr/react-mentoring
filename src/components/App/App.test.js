import App from '.';

describe('App', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<App />);
    expect(snap).toMatchSnapshot();
  });
});
