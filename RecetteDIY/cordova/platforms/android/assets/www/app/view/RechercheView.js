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
                 navigationBar : {
                  docked : 'top',
                  title:'Recherche',
                  items : [
                    /**
                      {
                        xtype: 'button',
                        html: 'i',
                        cls:'buttoninfo',
                        align : 'right',
                        listeners:{
                          tap : function () {

                            
                          } 
                        }
                      } **/
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