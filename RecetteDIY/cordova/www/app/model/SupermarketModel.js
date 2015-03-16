Ext.define("RecetteDIY.model.SupermarketModel", {
   extend: "Ext.data.Model",
   xtype:'supermarketmodel',
   config: { 
       fields: [
         { name: 'id', type: 'int' },
         { name: 'date', type: 'string' },
         { name: 'title', type: 'string' },
         { name: 'thumbnail_url', type: 'string' },
         { name: 'content', type: 'string' }  
      ],

   }
});