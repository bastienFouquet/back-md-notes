/**
 * @model
 * Notes.js
 */
module.exports = {
  attributes: {
    title: {
      type: 'string',
      required: true,
      unique: true
    },
    content: {
      type: 'ref',
      required: true
    },
    user: {
      model: 'user',
      required: true
    },
    leaf: {
      model: 'leaf',
      required: true,
    }
  },
};

