/**
 * @controller
 * NotesController
 */

module.exports = {
  create: async (req, res) => {
    try {
      const user = await sails.helpers.getUserByAuthorization.with({token: req.headers.authorization});
      if (user && req.body.leaf && req.body.title) {
        const note = await Notes.create({
          title: req.body.title,
          content: req.body.content,
          leaf: req.body.leaf,
          user: user.id
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
      const note = await Notes.updateOne({
        id: req.params.note
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
      const isDeleted = await Notes.destroyOne({
        id: req.params.note
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
  getAll: async (req, res) => {
    try {
      const notes = await Notes.find();
      if (notes) {
        return res.json(notes);
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  getOne: async (req, res) => {
    try {
      const note = await Notes.findOne({
        id: req.params.note
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

