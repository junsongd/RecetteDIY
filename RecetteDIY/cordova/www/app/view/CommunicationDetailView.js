Ext.define("RecetteDIY.view.CommunicationDetailView", {
   extend: 'Ext.Container',
   xtype: 'communicationdetailview',
   config: {
      id: 'communicationdetailview',
      width: '100%',
      layout:
      {
         type: 'vbox'
      }, 
      html:'communication detail page',
      items: [ 

           
      ],
      listeners: {
                
               painted: function()  { 
                 
               } 
            }
   },
   initialize: function() {
     
   }

});