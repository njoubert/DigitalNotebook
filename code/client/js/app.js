define( 

['jquery'], 

function($) {

  var boxCounter = 0;
  function genBoxId() {
    return "DN_box_" + (++boxCounter);
  }
  
  function getNewBox() {
    var newBox = $("<div>", {id: genBoxId(), class: "Box" });
    newBox.html();
    newBox.hover(
      function() { $(this).addClass("Box_hover"); }, 
      function() { $(this).removeClass("Box_hover"); });
    newBox.click(function() { this.contentEditable='true';})
    return newBox;
  }

  function initToolbar(divname) {
    
    var actions = {
      '+': function(e) { console.log("new box"); $("#container").append(getNewBox()); },
      '/': function(e) { console.log("split"); }
    }
    
    $(divname).append("<ul></ul>");
    var toolbarlist = $(divname + " ul");
    
    for (var a in actions) {
      var el = $("<li>")
        .html(a)
        .click(actions[a]);
      toolbarlist.append(el);
    }
    
  }

  function initialize() {
    $().ready(function() {

      initToolbar("#toolbar");
      
    });
  }
  
  return {
   initialize: initialize,
  }
   
});
