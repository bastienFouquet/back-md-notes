/**
 * @controller
 * NoteController
 */

const {v4} = require('uuid');
module.exports = {
  create: async (req, res) => {
    try {
      if (req.body.leaf && req.body.title) {
        const note = await Note.create({
          id: v4(),
          title: req.body.title,
          content: req.body.content,
          leaf: req.body.leaf,
          user: req.connection.user.id
        }).fetch();
        if (note) {
          return res.json(note);
        } else {
          res.badRequest();
        }
      } else {
        return res.badRequest();
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  update: async (req, res) => {
    try {
      const note = await Note.updateOne({
        id: req.params.id
      }).set({
        title: req.body.title,
        content: req.body.content,
        leaf: req.body.leaf,
      });
      if (note) {
        return res.json(note);
      } else {
        res.badRequest();
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  delete: async (req, res) => {
    try {
      const isDeleted = await Note.destroyOne({
        id: req.params.id
      });
      if (isDeleted) {
        return res.ok();
      } else {
        return res.badRequest();
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  getOne: async (req, res) => {
    try {
      const note = await Note.findOne({
        id: req.params.id
      });
      if (note) {
        return res.json(note);
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }
};

