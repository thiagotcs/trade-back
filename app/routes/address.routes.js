const { authJwt } = require('../middlewares');
const controller = require('../controllers/address.controller');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.get('/api/address/search/:zipCode', controller.getAddressByZipCode);

  app.post('/api/address', authJwt.verifyToken, controller.saveAddress);

  app.get('/api/address/all', authJwt.verifyToken, controller.getAllAddress);
};
