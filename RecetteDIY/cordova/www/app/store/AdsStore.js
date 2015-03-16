Ext.define('RecetteDIY.store.AdsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.adsstore',

    config: { 
        storeId: 'adsstore',
        model: "RecetteDIY.model.AdsModel",
        autoLoad:true,
        proxy: {
          type: 'ajax',
          url:'http://www.wuye.fr/wordpress/?feed=recette_advertise',
          reader: {
            type:'json',
            rootProperty:'callback'
         },
      }
    }

});