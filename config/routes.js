/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/

  /**
   * UserController
   */
  'post /auth': {
    controller: 'UserController',
    action: 'auth'
  },
  'post /users': {
    controller: 'UserController',
    action: 'create'
  },

  /**
   * NotesController
   */
  'post /notes': {
    controller: 'NotesController',
    action: 'create'
  },
  'put /notes/:id': {
    controller: 'NotesController',
    action: 'update'
  },
  'delete /notes/:id': {
    controller: 'NotesController',
    action: 'delete'
  },
  'get /notes/:id': {
    controller: 'NotesController',
    action: 'getOne'
  },
  'get /notes': {
    controller: 'NotesController',
    action: 'getAll'
  },

  /**
   * LeafController
   */
  'post /leafs': {
    controller: 'LeafController',
    action: 'create'
  },
  'put /leafs/:id': {
    controller: 'LeafController',
    action: 'update'
  },
  'delete /leafs/:id': {
    controller: 'LeafController',
    action: 'delete'
  },
  'get /leafs/:id': {
    controller: 'LeafController',
    action: 'getOne'
  },
  'get /leafs': {
    controller: 'LeafController',
    action: 'getAll'
  },

};
