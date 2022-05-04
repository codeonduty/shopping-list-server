const supertest = require('supertest');
const app = require('../application');

describe('Item', () => {
  describe('GET /api/item/:id', () => {
    describe('Given item does not exist...', () => {
      it('...returns 404 status status code', async () => {});
    });

    describe('Given item exists...', () => {
      it('...returns item from database', async () => {});
    });
  });

  describe('GET /api/item/catalogue', () => {
    describe('Given...', () => {
      it('...returns catalogue from database', async () => {});
    });
  });

  describe('PUT /api/item/:id', () => {
    describe('Given item does not exist...', () => {
      it('...returns 404 status status code', async () => {});
    });

    describe('Given item exists...', () => {
      it('...updates item in database', async () => {});
    });
  });
});
