 
Ext.define('RecetteDIY.store.SuperMarketStore', {
    extend: 'Ext.data.Store',
    alias: 'store.supermarketstore',
     config: { 
        storeId: 'supermarketstore',
        model: "RecetteDIY.model.SupermarketModel",
        autoLoad:true,
        proxy: {
          type: 'ajax',
          url:'http://www.wuye.fr/wordpress/?feed=recette_supermarket',
          reader: {
            type:'json',
            rootProperty:'callback'
         },
      },
    }
     
});