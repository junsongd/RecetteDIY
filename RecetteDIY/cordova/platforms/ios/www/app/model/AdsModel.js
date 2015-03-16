Ext.define("RecetteDIY.model.AdsModel", {
   extend: "Ext.data.Model",
   xtype:'adsmodel',
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