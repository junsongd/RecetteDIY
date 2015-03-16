Ext.define("RecetteDIY.view.RestaurantView", {
   extend: 'Ext.Container',
   xtype: 'restaurantview',
   config: {
      id: 'restaurantview',  
      layout:'fit',  
      items: [
         {
             xtype: 'restaurantviewcontainer',  
         } 
          
      ],
   },
   initialize: function() {
     
     
   }

});
