Ext.define("RecetteDIY.view.IngredientView", {
   extend: 'Ext.Container',
   xtype: 'ingredientview',
   config: {
      id: 'ingredientview',  
      layout:'fit',  
      items: [
         {
             xtype: 'ingredientviewcontainer',  
         } 
          
      ],
   },
   initialize: function() {
     
     
   }

});
