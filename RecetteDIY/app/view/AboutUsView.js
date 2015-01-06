Ext.define("RecetteDIY.view.AboutUsView", {
   extend: 'Ext.Container',
   xtype: 'aboutusview',
   config: {
      id: 'aboutusview', width: '100%',
      layout:
      {
         type: 'vbox'
      }, 
      html:'infos ',  
      items: [ 


           
      ],
      listeners: {
                
               painted: function()  { 
                 
               } 
            }
   },
   initialize: function() {
     
   }

});