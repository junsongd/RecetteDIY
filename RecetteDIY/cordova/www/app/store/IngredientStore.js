Ext.define('RecetteDIY.store.IngredientStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ingredientstore',
     config: { 
        storeId: 'ingredientstore',
        model: "RecetteDIY.model.SupermarketModel",
        autoLoad:true,
        proxy: {
          type: 'ajax',
          url:'http://www.wuye.fr/wordpress/?feed=recette_ingredient',
          reader: {
            type:'json',
            rootProperty:'callback'
         },
      },
    }
     
});