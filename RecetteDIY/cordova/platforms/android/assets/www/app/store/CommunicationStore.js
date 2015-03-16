Ext.define('RecetteDIY.store.CommunicationStore', {
    extend: 'Ext.data.Store',
    alias: 'store.communicationstore',

    config: { 
        storeId: 'communicationstore',
        model: "RecetteDIY.model.CommunicationModel",
        autoLoad:true,
        proxy: {
          type: 'ajax',
          url:'http://www.wuye.fr/wordpress/?feed=recette_disscution',
          reader: {
            type:'json',
            rootProperty:'callback'
         },
      },
    }

});