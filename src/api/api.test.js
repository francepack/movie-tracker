import React from 'react';
import { postFetch, deleteFetch} from './index';

let mockUrl;


describe('api', () => {
  beforeEach(() => {
    mockUrl = 'http://localhost:3000/api/';
  })

  describe('deleteFetch', () => {
    it('calls fetch with the correct url and options', async () => {
      window.fetch = jest.fn().mockReturnValue({
        json: () => Promise.resolve({
          ok: true,
          status: 'success',
        })
      })
      const actual = await deleteFetch(mockUrl);
      const expected = 'success';
      expect(actual).toEqual(expected);
    });
  });

  describe('postFetch', () => {
    it('calls fetch with the correct url and options', async () => {
      const url = 'users';
      const mockMethod = 'POST';
      const mockBody = { password: 'password', email: 'jeff@aol.com' };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve()
      }))
      postFetch(url, mockMethod, mockBody);
      const resultUrl = "http://localhost:3000/api/users";
      const resultOption = { "body": "{\"password\":\"password\",\"email\":\"jeff@aol.com\"}", "headers": { "Content-Type": "application/json" }, "method": "POST" }
      expect(fetch).toHaveBeenCalledWith(resultUrl, resultOption)
    });
  });
});