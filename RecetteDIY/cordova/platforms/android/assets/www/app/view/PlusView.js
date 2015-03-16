
Ext.define("RecetteDIY.view.PlusView", {
   extend: 'Ext.Container',
   xtype: 'plusview',
   config: {
      id: 'plusview',   
      width: '100%',
      flex: 1, 
      layout: 'fit',
      items: [ 
          
          {
                 xtype:'navigationview',
                 id: "plus_navigation_view",
                  defaultBackButtonText: ' ',
                  navigationBar : {
                  docked : 'top', 
                   
                  },
                items : [ 
                  { 
                    xtype: 'plusviewcontainer',
                    title: 'Autres',

                  } 
                ]
          }  
      ],
      
   },
   initialize: function() {
     
     
   }

});


 




 