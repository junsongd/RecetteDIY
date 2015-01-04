Ext.define("RecetteDIY.view.AccueilViewContainer", {
   extend: 'Ext.Container',
   xtype: 'accueilviewcontainer',
   config: {
      id: 'accueilviewcontainer', 
       width: '100%',  
      layout:'vbox',  
        
      items: [
         { 
            xtype: "container",
            id : "carousel_container",
            layout:'fit',
            flex:2,
            items: [

                {//give it an xtype of list for the list component
                    xtype: 'carousel',
                    id: "pub-image-list",
                    defaults: {
                        styleHtmlContent: true
                    },
                    layout: {type: "fit"},
                    items: [
                                {
                                    html : '<img src="images/appel_sponsor.jpg"></img>',
                                    listeners:{
                                    tap : function () {
                                         Ext.getCmp('accueil_navigation_view').push(
                                         {
                                            xtype: 'pubdetailview',
                                            title: 'Pub 1'
                                          }
                                        );  
                                    } ,
                                    element: 'element'
                                  } 
                                     
                                },
                                {
                                      html : '<img src="images/appel_sponsor2.jpg"></img>',
                                      listeners:{
                                      tap : function () {
                                           Ext.getCmp('accueil_navigation_view').push(
                                           {
                                              xtype: 'pubdetailview',
                                              title: 'Pub 2'
                                            }
                                          );  
                                      } ,
                                      element: 'element'
                                  }
                                    
                                },
                                {
                                    html : '<img src="images/plat_boeuf_sauce_piquante.jpg"></img>',
                                      listeners:{
                                      tap : function () {
                                           Ext.getCmp('accueil_navigation_view').push(
                                           {
                                              xtype: 'pubdetailview',
                                              title: 'Pub 3'
                                            }
                                          );  
                                      },
                                     element: 'element'
                                    }
                                },
                          ]
               },


                        ]

          },

             {
                    xtype:'panel',
                    flex:1,
                    cls:'category-menu-panel',
                    layout: {
                      pack: 'center',
                      type: 'hbox'
                    },
                    items:[ 
                      {
                        xtype: 'button',
                        html: 'Entré',
                         cls:'category-menu-button entre',
                         listeners:{
                                    tap : function () {
                                         Ext.getCmp('accueil_navigation_view').push(
                                         {
                                            xtype: 'recetteview',
                                            title: 'Entré'
                                          }
                                        );  
                                    } 
                                  } 
                      },
                      {
                        xtype: 'button',
                        html: 'Plat',
                         cls:'category-menu-button plat',
                         listeners:{
                                    tap : function () {
                                         Ext.getCmp('accueil_navigation_view').push(
                                         {
                                            xtype: 'recetteview',
                                            title: 'Plat'
                                          }
                                        );  
                                    }
                                  } 
                      },
                      {
                        xtype: 'button',
                        html: 'Dessert',
                         cls:'category-menu-button dessert',
                         listeners:{
                                    tap : function () {
                                         Ext.getCmp('accueil_navigation_view').push(
                                         {
                                            xtype: 'recetteview',
                                            title: 'Dessert'
                                          }
                                        );  
                                    }
                                  } 
                      },
                       {
                        xtype: 'button',
                        html: 'Autres',
                        cls:'category-menu-button autre',
                         listeners:{
                                    tap : function () {
                                         Ext.getCmp('accueil_navigation_view').push(
                                         {
                                            xtype: 'recetteview',
                                            title: 'Autres'
                                          }
                                        );  
                                    }
                                  } 
                      }
                    ]
                  }, 
                  {
                    xtype: 'platpopview' ,
                    flex:4

                  }, 
 
      ],
   },
   initialize: function() {
     
     
   }

});