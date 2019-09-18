exports.signUpData = {
  name: 'arnold',
  email: 'katunold94@gmail.com',
  password: '1qaz2wsx',
};

exports.signUpDataWithMissingFields = {
  email: 'katumba@mail.com',
  password: '1qaz2wsx',
};

exports.faultyLoginData = {
  email: '',
  password: '1qaz2wsx',
};

exports.loginData = {
  email: 'katumba@mail.com',
  password: '1qaz2wsx',
};

exports.expectedOneResult = {
  dataValues: {
    shipping_region_id: 1,
    customer_id: 20,
    name: 'Arnold',
    email: 'katunold94@gmail.com',
    password: '$2b$08$mHXLCZj5vidKzlm0YPHIfuvLHxLa2T.C/i7/J9vvBtDPetQESZ/X2',
  },
};

exports.updateCustomerDetails = {
  email: 'arnold@gmail.com',
  name: 'arnold',
};

exports.updateCustomerAddress = {
  country: 'Kenya',
};

exports.faultyUpdateCustomerAddress = {
  country: '***************Kenya**********',
};

exports.faultyUpdateCustomerDetails = {
  email: 'arnold',
  name: 'arnold',
};

exports.unExpectedUpdateCustomerDetailsFields = {
  country: 'Uganda',
};

exports.customer = {
  customer_id: 26,
  name: 'Arnold',
  email: 'katunold94@gmail.com',
  credit_card: null,
  address_1: null,
  address_2: null,
  city: null,
  region: null,
  postal_code: null,
  country: 'Uganda',
  shipping_region_id: 1,
  day_phone: '0706180670',
  eve_phone: '0706180655',
  mob_phone: null,
  facebook_id: null,
};
