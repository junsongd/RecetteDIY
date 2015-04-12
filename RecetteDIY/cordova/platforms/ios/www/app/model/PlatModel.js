Ext.define("RecetteDIY.model.PlatModel", {
   extend: "Ext.data.Model",
   xtype:'platmodel',
   config: { 
       fields: [
         { name: 'id', type: 'int' },
         { name: 'date', type: 'string' },
         { name: 'title', type: 'string' },
         { name: 'thumbnail_url', type: 'string' },
         { name: 'type', type: 'string' },
         { name: 'piment', type: 'string' },
         { name: 'difficulty', type: 'string' } ,
         { name: 'time', type: 'string' },
         { name: 'popular', type: 'string' } 
      ],

   }
});