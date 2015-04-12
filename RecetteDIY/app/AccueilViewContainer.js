Ext.define("RecetteDIY.view.AccueilViewContainer", {
   extend: 'Ext.Container',
   xtype: 'accueilviewcontainer',
   config: {
      id: 'accueilviewcontainer', 
       width: '100%',  
      layout:'fit',  
      
      items: [
        
                  {
                     xtype: 'platpopview' , 
                     scrollable: 'vertical',
  
                  }, 
 
      ] 
   },
   initialize: function() {
     
     
   }

});