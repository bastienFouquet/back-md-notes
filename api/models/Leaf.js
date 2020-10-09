/**
 * @model
 * Leaf.js
 */

module.exports = {
  attributes: {
    label: {
      type: 'string',
      required: true,
      unique: true
    },
    icon: {
      type: 'ref',
    },
    parentLeaf: {
      model: 'leaf'
    },
    user: {
      model: 'user',
      required: true
    },
    notes: {
      collection: 'notes',
      via: 'leaf'
    }
  },
};

