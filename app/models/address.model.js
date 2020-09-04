const mongoose = require('mongoose');

const Address = mongoose.model(
  'Address',
  new mongoose.Schema({
    zipCode: String,
    street: String,
    city: String,
    neighborhood: String,
    state: String,
    owner: String,
  })
);

module.exports = Address;
