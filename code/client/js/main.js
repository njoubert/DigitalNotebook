requirejs.config({
  paths: {
    'jquery'                     : 'lib/jquery-1.7.2.min',
    'jquery-jeditable'           : 'lib/jquery.jeditable',
    'jquery-autogrow-textarea'   : 'lib/jquery.autogrow.textarea',
    'markdown'                   : 'lib/markdown'

  }
});

require(['app'], function(app) {
  app.initialize();
});
