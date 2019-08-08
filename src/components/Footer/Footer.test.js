import Footer from '.';

describe('Footer', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<Footer />);
    expect(snap).toMatchSnapshot();
  });
});
