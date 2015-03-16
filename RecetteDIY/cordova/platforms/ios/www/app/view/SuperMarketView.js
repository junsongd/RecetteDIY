Ext.define("RecetteDIY.view.SuperMarketView", {
   extend: 'Ext.Container',
   xtype: 'supermarketview',
   config: {
      id: 'supermarketview',  
      layout:'fit',  
      items: [
         {
             xtype: 'supermarketviewcontainer',  
         } 
          
      ],
   },
   initialize: function() {
     
     
   }

});
