/**
 * @model
 * Note.js
 */
module.exports = {
  tableName: 'note', primaryKey: 'id',
  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true
    },
    title: {
      type: 'string',
      required: true,
      unique: true
    },
    content: {
      type: 'string',
      allowNull: true,
    },
    user: {
      model: 'user',
      required: true,
      columnName: 'userId'
    },
    leaf: {
      model: 'leaf',
      columnName: 'leafId'
    }
  },
};

