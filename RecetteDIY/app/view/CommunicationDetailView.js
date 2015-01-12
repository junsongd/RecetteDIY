Ext.define("RecetteDIY.view.CommunicationDetailView", {
   extend: 'Ext.Container',
   xtype: 'communicationdetailview',
   config: {
      id: 'communicationdetailview',
      width: '100%',
      scrollable: true,
      layout:
      {
         type: 'vbox'
      }, 
       items: [ 
          
           {
                 xtype:'image',
                 
                id:"communication-detail-image",
                height:"300px"
             
             
             
           },
           {
               xtype:'panel',
                
                id:"communication-detail-panel"

           }
      ],
      listeners: {
                
               painted: function()  { 

                

                  var record =  RecetteDIY.app.getController('DisscutionController')._currentRecord ;
                  // Ext.getCmp('communication-detail-image').setHtml('<img src = "'+ record.data.thumbnail_url +'"/>');
                   Ext.getCmp('communication-detail-panel').setHtml(record.data.content);
                   Ext.getCmp('communication-detail-image').setSrc(record.data.thumbnail_url );


                 
               } 
            }
   },
   initialize: function() {
     
   }

});