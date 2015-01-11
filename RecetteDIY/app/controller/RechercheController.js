Ext.define('RecetteDIY.controller.RechercheController', {
     extend: 'Ext.app.Controller', 
     config: {
        
    },
    showOptions: function(me) { 

        var a = Ext.create('Ext.Panel', {
            // id:'sharenews',
            xtype: 'panel',
             fullscreen: "true",
            // We give it a left and top property to make it floating by default
            layout: {
                type: "vbox"
            },
            centered: true,
            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            hideOnMaskTap: true,
            // Make it hidden by default
            cls: "subject-option-menus",
            // Set the width and height of the panel
            width: 170,
            height: 78,
            maxHeight: '100%',
            maxWidth: '100%',
           
            // Here we specify the #id of the element we created in `index.html`
            //   contentEl: 'content',
            // Style the content and make it scrollable
            styleHtmlContent: true,
            // Insert a title docked at the top with a title
            items: [ 
                {
                    xtype: "button",
                    id:'subject-option-text',
                    cls:'subject-option-button',
                    html: "Message",
                     listeners: {
                        tap: function(me) {
                              Ext.Viewport.remove(a);

                              if(Ext.getCmp('messageDroite').isHidden())
                               {
                                // create new subject
                                  var email = "terredeline@test.fr";
                                  var subject = "";
                                  var body = "";
                                  var attachement = [];
                                  TerreDeLin.app.getController('MainController').sentEmail(email,subject,body,attachement); 

                               }
                               else
                               {
                                 // answer the subject
                                  var email = "terredeline@test.fr";
                                 // var subject =  Ext.getCmp('subject-title-detail').getHtml( );
                                  var subject ='Lin & Innovation, perspectives d\'avenir?';
                                  var body = "";
                                  var attachement = [];
                                  TerreDeLin.app.getController('MainController').sentEmail(email,subject,body,attachement);

                               }
                              
                         }
                    }
                }, 
                {
                    xtype: "button",
                    id:'subject-option-text-image',
                     cls:'subject-option-button',
                    html: "Photo",
                     listeners: {
                        tap: function(me) {
                          Ext.Viewport.remove(a);
                            var email = "terredeline@test.fr";
                              var subject = "Terre de lin";
                              var body = ""; 
                              TerreDeLin.app.getController('MainController').takePhotoButtonClicked(email,subject,body); 

                               if(Ext.getCmp('messageDroite').isHidden())
                               {
                                // create new subject
                                  var email = "terredeline@test.fr";
                                  var subject = "";
                                  var body = "";
                                    TerreDeLin.app.getController('MainController').takePhotoButtonClicked(email,subject,body);  
                               }
                               else
                               {
                                 // answer the subject
                                  var email = "terredeline@test.fr";
                                  //var subject =  Ext.getCmp('subject-title-detail').getHtml( );
                                  var subject ='Lin & Innovation, perspectives d\'avenir?'; 
                                  var body = "";
                                    TerreDeLin.app.getController('MainController').takePhotoButtonClicked(email,subject,body);  
                               } 
                        }
                    }
                } 
             ]
        });
         Ext.Viewport.add(a);
         a.showBy(me);
     },
    init: function() {
      
    },  
 
});
