Ext.define("RecetteDIY.view.RecetteRechercheResultView", {
   extend: 'Ext.Container',
   xtype: 'recetterechercheresultview',
   config: {
      id: 'recetterechercheresultview',  
      layout:'fit',  
      items: [
         {
             xtype: 'recetterechercheresultviewcontainer',  
         } 
          
      ],
   },
   initialize: function() {
     
     
   }

});
