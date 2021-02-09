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
   * NoteController
   */
  'post /notes': {
    controller: 'NoteController',
    action: 'create'
  },
  'put /notes/:id': {
    controller: 'NoteController',
    action: 'update'
  },
  'delete /notes/:id': {
    controller: 'NoteController',
    action: 'delete'
  },
  'get /notes/:id': {
    controller: 'NoteController',
    action: 'getOne'
  },

  /**
   * LeafController
   */
  'post /leaf': {
    controller: 'LeafController',
    action: 'create'
  },
  'put /leaf/:id': {
    controller: 'LeafController',
    action: 'update'
  },
  'delete /leaf/:id': {
    controller: 'LeafController',
    action: 'delete'
  },
  'get /leaf/:id': {
    controller: 'LeafController',
    action: 'getOne'
  },
  'get /leaf': {
    controller: 'LeafController',
    action: 'getAll'
  },

};
