const supertest = require('supertest');
const app = require('../application');

describe('Shopper', () => {
  describe('POST /api/shopper/login', () => {
    describe('Given shopper does not exist...', () => {
      it('...returns 404 status status code', async () => {});
    });

    describe('Given shopper exists...', () => {
      it('...returns shopper + token + message from database', async () => {});
    });
  });

  describe('POST /api/shopper/register', () => {
    describe('Given shopper does not exist...', () => {
      it('...returns 404 status status code', async () => {});
    });

    describe('Given shopper exists...', () => {
      it('...returns shopper + token + message from database', async () => {});
    });
  });
});
