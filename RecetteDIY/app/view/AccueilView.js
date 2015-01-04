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
                 navigationBar : {
                  docked : 'top',
                  title:'Accueil',
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
                    xtype: 'accueilviewcontainer',
                    title: 'Accueil'
                  } 
                ]
          }  
      ],
      
   },
   initialize: function() {
     
     
   }

});
