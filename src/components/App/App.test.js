import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockMovies;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('fetchRecentMovies', () => {
    beforeEach(() => {
      fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockData),
      }));
    });
    it('should return requested data', () => {
      mockMovies = {results: [{name: 'Mason'}, {name: 'Isaac'}]};

    });
    it('should throw an error when response is not ok', async () => {
      fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        ok: false
      }));
      wrapper.instance().fetchRecentMovies()
      // .catch(error => {
      //   expect(error.message).toBe('Response not ok')
      // })

    });
    it('should call getMovies if response is ok')
  });

});



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
