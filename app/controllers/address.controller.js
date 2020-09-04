/* eslint-disable no-shadow */
const cep = require('cep-promise');
const db = require('../models');

const Address = db.address;

exports.getAddressByZipCode = async (req, res) => {
  try {
    const address = await cep(req.params.zipCode);
    return res.status(200).json(address);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.saveAddress = (req, res) => {
  const address = new Address({
    zipCode: req.body.cep,
    street: req.body.street,
    city: req.body.city,
    neighborhood: req.body.neighborhood,
    state: req.body.state,
    owner: req.userId,
  });

  address.save((error, address) => {
    if (error) {
      res.status(500).send({ message: error });
      return;
    }
    res.send({ address });
  });
};

exports.getAllAddress = (req, res) => {
  Address.find({ owner: { $eq: req.userId } }, (err, address) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ address });
  });
};
