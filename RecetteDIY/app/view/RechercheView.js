Ext.define("RecetteDIY.view.RechercheView", {
   extend: 'Ext.Container',
   xtype: 'rechercheview',
   config: {
      id: 'rechercheview', width: '100%',
      layout:
      {
         type: 'vbox'
      },
      items: [ 
          {
              xtype: 'panel' 
          }    
         
      ],
      listeners: {
                
               painted: function()  { 
                 
               } 
            }
   },
   initialize: function() {
     
   }

});