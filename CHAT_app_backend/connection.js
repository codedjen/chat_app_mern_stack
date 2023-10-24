const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://dddjjj2223:hOiOmvgpnEmzqd14@atlascluster.r62x3lj.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
