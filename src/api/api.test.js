import React from 'react';
import { deleteFetch, options, postFetch, getFetch } from './index';

let mockUrl;
let mockData;
let mockOptions;

describe('api', () => {
  beforeEach(() => {
    mockData = [{name: 'Isaac'}, {name: 'Mason'}]
    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData),
    }));
  });
  describe('deleteFetch', () => {
    it('should take expected url', () => {

    });
    it('should return expected data', () => {

    });
    it('should throw an error when response is not ok', () => {

    });
  });

  describe('options', () => {
    it('', () => {

    });
  });

  describe('postFetch', () => {
    it('', () => {

    });
  });

  describe('getFetch', () => {
    it('', () => {

    });
  });
});