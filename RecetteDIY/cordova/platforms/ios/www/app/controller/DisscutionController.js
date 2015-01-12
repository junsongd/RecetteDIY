Ext.define('RecetteDIY.controller.DisscutionController', {
   extend: 'Ext.app.Controller',
    _currentRecord : null,
   config: {
     
   },
   init: function() {
      
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
                                // create new subject
                                  var email = "junsong.dong@gmail.com";
                                  var subject = "Communication";
                                  var body = "";
                                  var attachement = [];
                                  RecetteDIY.app.getController('MainController').sentEmail(email,subject,body,attachement);  
                              
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
                            var email = "junsong.dong@gmail.com";
                              var subject = "Communication";
                              var body = ""; 
                              RecetteDIY.app.getController('MainController').takePhotoButtonClicked(email,subject,body);  
                              
                        }
                    }
                } 
             ]
        });
         Ext.Viewport.add(a);
         a.showBy(me);
     },
  showMessageList : function ()
  {
       // go to top 
         setTimeout(function(){ Ext.getCmp('subjectDroite').getScrollable().getScroller().scrollTo(0, 0);},50);  
         
         Ext.getCmp('subjectlist').hide();
         Ext.getCmp('subjectDroite').show(); 
         Ext.getCmp('messageBackButton').show();
         Ext.getCmp('disscution-create-button').hide();  
           
  } ,
   showMessageDetail: function (a, b, c, record, e)
  {
       // go to top 
         setTimeout(function(){ Ext.getCmp('messageDroite').getScrollable().getScroller().scrollTo(0, 0);},50);  
         
         Ext.getCmp('message_list').hide();
         Ext.getCmp('messageDroite').show();
         Ext.getCmp('messageBackButton').show(); 
         Ext.getCmp('disscution-create-button').hide();  
         var desc=record.data.message;  
         Ext.getCmp('messageDroite').setHtml(desc); 
          
  } 

 });
