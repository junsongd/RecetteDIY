Ext.define("RecetteDIY.view.RechercheView", {
   extend: 'Ext.Container',
   xtype: 'rechercheview',
   config: {
      id: 'rechercheview',   
      width: '100%',
      flex: 1, 
      layout: 'fit',
      items: [ 
          
          {
                 xtype:'navigationview',
                 id: "recherche_navigation_view",
                  defaultBackButtonText: ' ',
                 navigationBar : {
                  docked : 'top',
                  title:'Recherche' ,
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
                    xtype: 'rechercheviewcontainer',
                    title: 'Recherche'
                  } 
                ]
          }  
      ],
   },
   initialize: function() {
      
   }

});