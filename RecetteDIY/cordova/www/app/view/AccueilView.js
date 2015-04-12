Ext.define("RecetteDIY.view.AccueilView", {
   extend: 'Ext.Container',
   xtype: 'accueilview',
   config: {
      id: 'accueilview',   
      width: '100%',
      flex: 1, 
      layout: 'fit',
      items: [ 
          
          {
                 xtype:'navigationview',
                 id: "accueil_navigation_view",
                 defaultBackButtonText: ' ',
                 navigationBar : {
                  docked : 'top',
                  title:'Accueil',
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
                    xtype: 'accueilviewcontainer',
                    title: 'Accueil'
                  } 
                ]
          }  
      ] 
      

   },
   initialize: function() {
     
     
   }

});
