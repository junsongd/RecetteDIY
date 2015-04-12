
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
                   items : [ 
                      {
                        xtype: 'button', 
                        iconCls:'refresh',
                        align : 'left',
                        listeners:{
                          tap : function () { 
                             RecetteDIY.app.getController('MainController').updateContent();
                          } 
                        }
                      } 
                     ]
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


 




 