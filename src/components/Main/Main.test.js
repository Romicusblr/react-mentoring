import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Main from '.';
import fakeMovies from '../../../__mocks__/fakeMovies';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Main', () => {
  it('should match to snapshot', () => {
    const snap = shallow(
      <Provider store={store}>
        <Main data={fakeMovies} />
      </Provider>,
    );
    expect(snap).toMatchSnapshot();
  });
});
