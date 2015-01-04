Ext.define("RecetteDIY.view.IngredientView", {
   extend: 'Ext.Container',
   xtype: 'ingredientview',
   config: {
      id: 'ingredientview', 
      width: '100%',
      flex:1, 
      layout:'fit',
      items:[
               {
                  xtype: 'tdltabpanel',
                  id: "calculatorview_tabbar",
                  tabBarPosition: 'top',
                  tabBar: {
                    cls:'tabbarmenu',
                    layout:  {
                      pack : 'center',
                      align: 'center'  
                    }, 

                  },
                  items: [
                    {
                      title: 'Maturité' ,
                      xtype:'navigationview',
                      id: "maturite_navigation_view",
                      scrollable: true,
                      defaultBackButtonText: ' ', 
                      navigationBar : {
                        docked : 'top',
                        cls: 'maturite-navigation-bar',
                        items : [
                          {
                            xtype: 'button',
                            html: 'i',
                            cls:'buttoninfo',
                            align : 'right',
                            listeners:{
                              tap : function () {


v                              } 
                            }
                          }
                        ]
                      },
                      items:[
                        { 
                           
                        } 
                      ]
                    },
                    // Densité semis
                    {
                      title: 'Densité semis' ,
                      xtype:'navigationview',
                      id: "densite_navigation_view",
                      scrollable: true,
                      defaultBackButtonText: ' ', 
                      navigationBar : {
                        docked : 'top',
                        cls: 'densite-navigation-bar',
                        items : [
                          {
                            xtype: 'button',
                            html: 'i',
                            cls:'buttoninfo',
                            align : 'right',
                            listeners:{
                              tap : function () {
                               } 
                            }
                          }
                        ]
                      },
                      items:[
                        { 
                           
                        } 
                      ]
                    } 
                  ]
                } 
                               
            ] 
   },

   initialize: function() { 
   }

});