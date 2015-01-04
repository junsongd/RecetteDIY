Ext.define('RecetteDIY.controller.PropositionController', {
 extend: 'Ext.app.Controller',   
 config: {},

 init: function () {},

 showVariteInfoMessage : function () { 
  showConfirm();
    // process the confirmation dialog result
    function onConfirm(buttonIndex) {};
    // Show a custom confirmation dialog
    function showConfirm() {
      if (navigator.notification) {
        navigator.notification.confirm(
          'Variété infos !',             // message
          onConfirm,                    // callback to invoke with index of button pressed
          'Variété',                     // title
          ['Fermer']  // buttonLabels
        );
      }
      else {
        window.alert("Varite infos !");
      }
    }
  },

  displayVarieteDetailPage: function (a, b, c, record, e) {
    // bind click 
    setTimeout(function(){ 
      TerreDeLin.app.getController('MainController').openUrlWithInappBroswer();
    },300);
  },

  displayMaladieDetailPage: function (a, b, c, record, e) {
    // go to top 
    setTimeout(function () {Ext.getCmp('maladieDroite').getScrollable().getScroller().scrollTo(0, 0);},50); 

    var desc = record.data.content;
    Ext.getCmp('maladieBackbutton').show();
    Ext.getCmp('maladielist').hide();
    Ext.getCmp('maladieDroite').show();
    Ext.getCmp('maladieDroite').setHtml(desc);

    // bind click 
    setTimeout(function () { 
      TerreDeLin.app.getController('MainController').openUrlWithInappBroswer();
    },300);
  }
});
