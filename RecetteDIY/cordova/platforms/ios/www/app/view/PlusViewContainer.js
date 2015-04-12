Ext.define("RecetteDIY.view.PlusViewContainer", {
  extend: 'Ext.Container',
  xtype: 'plusviewcontainer',
  config: {
    id:'plusviewcontainer', 
    layout:'vbox', 
    showAnimation:{
               type:'slide',
               direction:'right',
               // duration:5000,
            },  
    items: [

                         {
                            xtype: "panel",
                            cls: "autre-menu",  
                            layout:
                            {
                               type: 'vbox'
                            },
                             items:[
                                {
                                   xtype: "panel",  
                                   html: '<img  src="images/astuce_ingredients.png" /> ',
                                   listeners:{
                                      tap : function () {
                                           Ext.getCmp('plus_navigation_view').push(
                                                   {
                                                      xtype: 'infotview',
                                                      title: 'Astuces et Ingrédients'
                                                    }
                                                  ); 
                                       } ,
                                       element:'element'
                                     }
                                }, 
                                {
                                   xtype: "label",
                                   html:'Les astuces et les ingrédients',
                                    listeners:{
                                      tap : function () {
                                           Ext.getCmp('plus_navigation_view').push(
                                                   {
                                                      xtype: 'infotview',
                                                      title: 'Astuces et Ingrédients'
                                                    }
                                                  ); 
                                       } ,
                                       element:'element'
                                     }

                                },

                            ]
                            
                            
                         },  
                         {
                            xtype: "panel",
                            cls: "autre-menu", 
                            
                            layout:
                            {
                               type: 'vbox'
                            },
                             items:[
                                {
                                   xtype: "panel",  
                                   html: '<img  src="images/demande_recette.png" /> ',
                                   listeners:{
                                      tap : function () {   
                                      var email = "junsong.dong@gmail.com";
                                      var subject ='Envoyez nous un plat vous voulez savoir'; 
                                      var body = "";
                                      RecetteDIY.app.getController('MainController').takePhotoButtonClicked(email,subject,body);  
                                           
                                       } ,
                                       element:'element'
                                     }

                                }, 
                                {
                                   xtype: "label",
                                   html:'Envoyez nous un plat vous voulez savoir'

                                },

                            ]
                            
                            
                         }, 
                         {
                            xtype: "button",
                            cls: "autre-menu-button",  
                            html:"Partage app",
                             listeners:{
                              tap : function () {
                                 if(window.device)
                                 window.plugins.socialsharing.share('Message, subject, image and link', 'The subject', 'https://www.google.nl/images/srpr/logo4w.png', 'http://www.x-services.nl') ;
                                 else
                                 alert('partage app');
                                  
                               } 
                             }
                                      
                         },
                          {
                            xtype: "button",
                            cls: "autre-menu-button",  
                            html:"Contactez-nous",
                             listeners:{
                              tap : function () {

                                  var email = "junsong.dong@gmail.com";
                                  var subject = "Contactez-nous";
                                  var body = "Contactez-nous";
                                  var attachement = [];
                                  RecetteDIY.app.getController('MainController').sentEmail(email,subject,body,attachement); 
 

                               } 
                             }
                            
                         },    

    ],
       
  },
  initialize: function () {}
});   