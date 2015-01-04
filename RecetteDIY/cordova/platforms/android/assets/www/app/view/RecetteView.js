Ext.define("RecetteDIY.view.RecetteView", {
   extend: 'Ext.Container',
   xtype: 'recetteview',
   config: {
      id: 'recetteview',  
      layout:'fit',  
      items: [
         {
             xtype: 'recetteviewcontainer',  
         } 
          
      ],
   },
   initialize: function() {
     
     
   }

});
