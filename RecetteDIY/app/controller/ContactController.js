Ext.define('RecetteDIY.controller.ContactController', {
     extend: 'Ext.app.Controller', 
     config: {
        
    },
    init: function() {
      
    }, 
       
    afficherContact: function(a, b, c, record, e)	{
        // go to top 
       //  setTimeout(function(){ Ext.getCmp('contactview').getScrollable().getScroller().scrollTo(0, 0);},50); 
        // display content
         var desc=record.data.content; 
         Ext.getCmp('contactview').setHtml(desc);
       
    },
    
 
});
