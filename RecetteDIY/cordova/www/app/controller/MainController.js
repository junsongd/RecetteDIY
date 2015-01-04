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
  }
});
