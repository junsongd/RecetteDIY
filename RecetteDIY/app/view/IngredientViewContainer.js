 
Ext.define("RecetteDIY.view.IngredientViewContainer", {
  extend: 'Ext.Container',
  xtype: 'ingredientviewcontainer',
  config: {
    layout:'fit', 
    showAnimation:{
               type:'slide',
               direction:'right',
               // duration:5000,
            },  
    items: [
      {  
        xtype : 'ingredientlist', 
       }
      
    ],
       
  },
  initialize: function () {}
});   
 