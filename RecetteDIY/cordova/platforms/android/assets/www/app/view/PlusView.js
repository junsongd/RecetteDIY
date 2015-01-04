Ext.define("RecetteDIY.view.PlusView", {
   extend: 'Ext.Container',
   xtype: 'plusview',
   config: {
      id: 'plusview', width: '100%',
      layout:
      {
         type: 'vbox'
      },
      items: [ 
          {
              xtype: 'panel',
              id: "contact-email-button",
              cls: "accueil-button",
              layout:
              {
                 type: 'hbox'
              },
              items: [
                         
                         {
                                xtype: 'label', 
                                cls:"contact-button-label",
                                html : 'Envoyez-nous un email', 
                         } 
                  
                     ],
                     // bind click
                     listeners: {
                          tap: function(e, node) { 
                                   var email = "terredeline@test.fr";
                                   var subject = "Terre de lin";
                                   var body = "";
                                   var attachement = [];
                                   RecetteDIY.app.getController('MainController').sentEmail(email,subject,body,attachement);  
                           },
                           element: 'element'
                      }
                  
            }
         
      ],
      listeners: {
                
               painted: function()  { 
                 
               } 
            }
   },
   initialize: function() {
     
   }

});