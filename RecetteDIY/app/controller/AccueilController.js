Ext.define('RecetteDIY.controller.AccueilController', {
     extend: 'Ext.app.Controller', 
     config: {
        
    },
    init: function() {
      
    }, 
   
    loadAdvertise : function (){
    	 var store = Ext.getStore('adsstore'); 
             store.load({
              callback: function(records, operation, success) {
                  myCarousel = Ext.getCmp('pub-image-list');
                  myCarousel.setHtml('');
                  for(var i=0; i<records.length; i++){
                      myCarousel.add({
                          html: '<img class= "advertise-image" data-index ='+i+  ' src=' + records[i].data.thumbnail_url + '>'
                      });
 
                  }
              },
              scope: this
          });  

       
    },

    bindClick : function(){ 

    	    $( ".advertise-image" ).each(function(index) {
			    $(this).on("click", function(){
			        var index = $(this).data('index');
			         RecetteDIY.app.getController('AccueilController').displayAdsDetail(index);
			    });
			}); 
    },
    unbindClick : function(){
           $( ".advertise-image" ).unbind( "click" );  
    },

    displayAdsDetail : function(index) { 

           var store = Ext.getStore('adsstore'); 
           var ads = store.getAt(index);
    	   var title = ads.data.title;

           Ext.getCmp('accueil_navigation_view').push(
                                               {
                                                  xtype: 'pubdetailview',
                                                  title: title,
                                                  record: ads

                                                }
                                              );  
    }
 
 
});
