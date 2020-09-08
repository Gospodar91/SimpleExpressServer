const mongoose = require('mongoose')
const {
  Schema
} = require('mongoose')

const userSchema = new Schema([{
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  otherImage: {
    type: String,
    required: true,
    unique: false
  },

  className: {
    type: String,
    required: true,
    unique: false
  },
  description: {
    type: String,
    required: true,
    unique: false
  },
  country: {
    type: String,
    required: true,
    unique: false
  },
  price: {
    type: Number,
    required: true,
    unique: false
  },
  price2: {
    type: Number,
    required: true,
    unique: false
  },
  tara: {
    type: Object,
    required: true,
    unique: false
  },
  latestProduct: {
    type: String,
    required: true,
    unique: false
  },
  


}])

UserModel = mongoose.model(
  'products', userSchema)


module.exports =
  UserModel