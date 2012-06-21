define( 

['jquery'], 

function($) {

  function initialize() {
    $().ready(function() {
      console.log("khaskhsakh");
      $("#debug").html("LOADED");
    });
  }
  
  return {
   initialize: initialize,
  }
   
});
