Ext.define("RecetteDIY.view.AccueilViewContainer", {
   extend: 'Ext.Container',
   xtype: 'accueilviewcontainer',
   config: {
      id: 'accueilviewcontainer', 
       width: '100%',  
      layout:'vbox',  
       scrollable:'vertical',   
      items: [
         { 
            xtype: "container",
            id : "carousel_container",
            layout:'fit',
            
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
                  }, 
                  {
                    xtype: 'platpopview' 

                  }, 
 
      ],
   },
   initialize: function() {
     
     
   }

});