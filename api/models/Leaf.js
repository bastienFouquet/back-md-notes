/**
 * @model
 * Leaf.js
 */

module.exports = {
  tableName: 'leaf', primaryKey: 'id',
  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true
    },
    label: {
      type: 'string',
      required: true,
      unique: true
    },
    parentLeaf: {
      model: 'leaf',
      columnName: 'leafId',
      required: false
    },
    user: {
      model: 'user',
      columnName: 'userId',
      required: true
    },
    notes: {
      collection: 'note',
      via: 'leaf'
    }
  },
};

