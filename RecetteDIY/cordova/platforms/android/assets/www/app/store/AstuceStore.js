 
Ext.define('RecetteDIY.store.AstuceStore', {
    extend: 'Ext.data.Store',
    alias: 'store.astucestore',
     config: { 
        storeId: 'restostore',
        model: "RecetteDIY.model.SupermarketModel",
        autoLoad:true,
        proxy: {
          type: 'ajax',
          url:'http://www.wuye.fr/wordpress/?feed=recette_astuce',
          reader: {
            type:'json',
            rootProperty:'callback'
         },
      },
    }
     
});