import Spinner from '.';

describe('Spinner', () => {
  it('should match to snapshot', () => {
    const snap = shallow(<Spinner />);
    expect(snap).toMatchSnapshot();
  });
});
