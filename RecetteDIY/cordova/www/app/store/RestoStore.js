 
Ext.define('RecetteDIY.store.RestoStore', {
    extend: 'Ext.data.Store',
    alias: 'store.restostore',
     config: { 
        storeId: 'restostore',
        model: "RecetteDIY.model.SupermarketModel",
        autoLoad:true,
        proxy: {
          type: 'ajax',
          url:'http://www.wuye.fr/wordpress/?feed=recette_resto',
          reader: {
            type:'json',
            rootProperty:'callback'
         },
      },
    }
     
});