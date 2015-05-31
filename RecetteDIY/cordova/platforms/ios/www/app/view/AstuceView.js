Ext.define("RecetteDIY.view.AstuceView", {
   extend: 'Ext.Container',
   xtype: 'astuceview',
   config: {
      id: 'astuceview',  
      layout:'fit',  
      items: [
         {
             xtype: 'astuceviewcontainer',  
         } 
          
      ],
   },
   initialize: function() {
     
     
   }

});
