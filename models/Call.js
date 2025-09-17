const mongoose = require('mongoose');

const callSchema = new mongoose.Schema({
  // Define your schema fields based on your collection structure. For now, use loose typing.
  status: String
}, { strict: false });

module.exports = mongoose.model('Call', callSchema, 'calls');
