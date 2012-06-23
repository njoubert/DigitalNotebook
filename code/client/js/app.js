define( 

['jquery', 'markdown', 'jquery-jeditable'], 

function($, Markdown) {

  var boxCounter = 0;
  function genBoxId() {
    return "DN_box_" + (++boxCounter);
  }
  
  function getNewBox() {
    var newBox = $("<div>", {id: genBoxId(), class: "Box" });
    
    newBox.html("YES");
    
    newBox.hover(
      function() { $(this).addClass("Box_hover"); }, 
      function() { $(this).removeClass("Box_hover"); });
      
    // newBox.click(function() { 
    //   console.log("click"); 
    //   this.contentEditable='true';})
    
    newBox.editable(function(value, settings) {
      $.data(newBox, "markdown", value);
      return(Markdown.toHTML(value));
    }, {
      type    : 'textarea',
      onblur  : 'submit',
      data    : function(data,settings) {
        return $.data(newBox, "markdown");
      }
    });
    
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
