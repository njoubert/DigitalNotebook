requirejs.config({
  paths: {
    'jquery'           : 'lib/jquery-1.7.2.min',
  }
});

require(['app'], function(app) {
  app.initialize();
});
