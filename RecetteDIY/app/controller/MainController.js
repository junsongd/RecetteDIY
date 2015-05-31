Ext.define('RecetteDIY.controller.MainController', {
 extend: 'Ext.app.Controller',
 config: {

 },
  init: function() {
    //TODO : LOAD ACTUALITE
  },
  // open the urls from inapp browser
  openUrlWithInappBroswer: function () {
    $(document).off('click', 'a[href^=http], a[href^=https] ');
    $(document).on('click', 'a[href^=http], a[href^=https] ', function(e) {
      e.preventDefault();
      var $this = $(this);
      var target = $this.data('inAppBrowser') || '_blank';
      var target ='_blank';
      var url  = $this.attr('href');

      window.open(url, target, 'location=yes,EnableViewPortScale=yes,closebuttoncaption=Retour');
    });
  },
         // SEND MAIL 
    sentEmail : function (emailAddress,subject,body,attachements)
  {  
      
      cordova.plugins.email.open ({
      to:emailAddress,
      subject :subject,
      body:body,
      attachments:attachements
    });
  },
    
    //TAKE PHOTO 
   takePhotoButtonClicked :function  (emailAddress,subject,body)
  {
    var context = this; 
     var onSuccess = function(imageURI)
      {                             
        window.console.log("onSuccess");
        var attachements = [imageURI];
         window.setTimeout(function(){context.sentEmail(emailAddress,subject,body,attachements);}, 1000);
      };
   var onFail = function(error)
      {
        window.console.log("takePhotoButtonClicked : " + error);
      };
                                
       navigator.camera.getPicture (onSuccess, onFail,{quality: 50, destinationType: Camera.DestinationType.FILE_URI});                                 
  },

     updateContent : function ()
  {  

        Loading.show();
        var platstore = Ext.getStore('platstore');
        var adsstore = Ext.getStore('adsstore');
        var supermarketstore = Ext.getStore('supermarketstore');
        var restostore = Ext.getStore('restostore');
        var astucesstore = Ext.getStore('astucesstore');
        var communicationstore = Ext.getStore('communicationstore');
        var ingredientstore = Ext.getStore('ingredientstore');  
        platstore.load();
        adsstore.load();
        supermarketstore.load();
        restostore.load();
        astucesstore.load();
        communicationstore.load();
        ingredientstore.load();  
        ingredientstore.load({
           callback: function(records, operation, success) {
            setTimeout(
                     function() {
                        Loading.hide();
                     },
                     500
                  );
           }
         });
          RecetteDIY.app.getController('AccueilController').displayPupularPlats(); 
                              setTimeout(function(){
                                 var list = Ext.getCmp('plat-pop-list'); 
                                 var storeitems = Ext.getCmp('plat-pop-list').getStore().data.items; 
                                if(storeitems.length != 0)
                                list.setHeight(  Math.ceil(storeitems.length/2) * 202 );
                              },0);
      
  } 

});
