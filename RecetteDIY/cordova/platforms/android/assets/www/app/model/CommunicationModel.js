Ext.define("RecetteDIY.model.CommunicationModel", {
   extend: "Ext.data.Model",
   xtype:'communicationmodel',
   config: { 
       fields: [
         { name: 'title', type: 'string' },
         { name: 'date', type: 'string' }, 
         { name: 'thumbnail_url', type: 'string' },
         { name: 'content', type: 'string' }  
      ],

   }
});