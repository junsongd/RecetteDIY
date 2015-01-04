Ext.define("RecetteDIY.view.MaladieView", {
   extend: 'Ext.Container',
   xtype: 'maladieview',
   config: {
      id: 'maladieview',
      title: 'Maladies',
      layout:'hbox', 
      items: [
         {
             
            xtype: "maladielist",  
             //CREATION LISTE
            flex:'1',
            showAnimation:{
               type:'slide',
               direction:'right',
               // duration:5000,
            }, 
            listeners: {
               itemtap: function ( element, index, target, record, e, eOpts ) {
                  
               },
               painted: function()  { 
                  Loading.hide(); 
               } 
            }
            
         }
      ],
   },
   initialize: function() {
      
   }

});
