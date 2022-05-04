const supertest = require('supertest');
const app = require('../application');

describe('Shopping List', () => {
  describe('GET /api/shopper/list', () => {
    describe('Given...', () => {
      it("...returns shopper's previous shopping lists", async () => {});
    });
  });

  describe('POST /api/shopper/list', () => {
    describe('Given...', () => {
      it('...returns shopping list + message', async () => {});
    });
  });
});

describe('Wishlist', () => {
  describe('GET /api/shopper/list/wish', () => {
    describe('Given...', () => {
      it("...returns shopper's wishlist", async () => {});
    });
  });

  describe('POST /api/shopper/list/wish', () => {
    describe('Given...', () => {
      it("...returns shopper's wishlist + message", async () => {});
    });
  });
});
