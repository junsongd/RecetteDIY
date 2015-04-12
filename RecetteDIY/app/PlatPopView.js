Ext.define("RecetteDIY.view.PlatPopView", {
   extend: 'Ext.Container',
   xtype: 'platpopview',
     config: {
          id : 'platpopview',
          items: [
            {
                xtype: 'dataview', 
                id:'plat-pop-list',
                styleHtmlContent: true,
                scrollable: false,
                inline: {
                    wrap: true
                }, 
                itemCls: 'platpop-item',
                itemTpl: [ 
                    '<div class="platpopimage">',
                    '   <img src= "{thumbnail_url}">',
                    '</div>',
                    '<div class="platpoptitle">',
                    '    {title}',
                    '</div>'
                ],
                store: 'platstore',
                listeners: {
                             itemtap: function ( element, index, target, record, e, eOpts ) {
                                
                                         Ext.getCmp('accueil_navigation_view').push(
                                         {
                                            xtype: 'recettedetailview',
                                            title: record.data.title
                                          }
                                        );  

                                   
                           },
                            painted: function()  { 

                             RecetteDIY.app.getController('AccueilController').displayPupularPlats(); 
                       }
                },


                items :[

                   
                     { 
                        xtype: "container",
                        id : "carousel_container",
                        layout:'fit', 
                          docked: 'top',
                        items: [

                          {//give it an xtype of list for the list component
                              xtype: 'carousel',
                              id: "pub-image-list",
                              defaults: {
                                  styleHtmlContent: true
                              },
                              layout: {type: "fit"},
                           
                              listeners: {
                    
                                           painted: function()  { 

                                             RecetteDIY.app.getController('AccueilController').unbindClick();  
                                             
                                             RecetteDIY.app.getController('AccueilController').bindClick();   
                                        }
                                              
                                     }

                              },      
                        

                               ]

                         },

                             {
                                    xtype:'panel',
                                      docked: 'top',
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

                                                          setTimeout(function(){ 
                                                        RecetteDIY.app.getController('AccueilController').displayEntre();  
                                                       },50);
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
                                                       setTimeout(function(){ 
                                                        RecetteDIY.app.getController('AccueilController').displayPlats();  
                                                       },50);
                                                        
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
                                                          setTimeout(function(){ 
                                                        RecetteDIY.app.getController('AccueilController').displayDessert();  
                                                       },50);
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
                                                          setTimeout(function(){ 
                                                        RecetteDIY.app.getController('AccueilController').displayAutre();  
                                                       },50);
                                                    }
                                                  } 
                                      }
                                    ]
                                  } ,

                                    {
                                        xtype: 'toolbar', 
                                        id:'platpopbar',
                                          docked: 'top',
                                          height:30,
                                        title: 'Les plats populaires'
                                    }

                ],
                listeners: {
                        
                            painted: function()  { 
                                /**
                             setTimeout(function(){
                                 var list = Ext.getCmp('plat-pop-list'); 
                             if(list.items.length != 0)
                             list.setHeight(  Math.ceil(list.items.length/2) * 202 + 30 + 170); **/
                            // },0); 
                              var list = Ext.getCmp('plat-pop-list'); 
                             if(list.items.length != 0)
                             list.setHeight( 1000); 

                       }
                },
            }
        ] 
    },
   initialize: function() {
     
   }

});