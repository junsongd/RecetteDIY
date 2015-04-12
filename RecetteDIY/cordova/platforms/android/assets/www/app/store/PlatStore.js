Ext.define('RecetteDIY.store.PlatStore', {
    extend: 'Ext.data.Store',
    alias: 'store.platstore',
     config: { 
        storeId: 'platstore',
        model: "RecetteDIY.model.PlatModel",
        autoLoad:true,
        proxy: {
          type: 'ajax',
          url:'http://www.wuye.fr/wordpress/?feed=plats',
          reader: {
            type:'json',
            rootProperty:'callback'
         },
      },
    }
     
});