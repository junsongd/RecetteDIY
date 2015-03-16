Ext.define('RecetteDIY.store.SuperMarketStore', {
    extend: 'Ext.data.Store',
    alias: 'store.supermarketstore',

    config: {
        data: [
            {
                title: 'TANG FRERE',
                date:'10/01/2015 06:18:08', 
                thumbnail_url : "images/popular_1.jpg", 
                content: 'TANG FRERE'
            } ,
            {
                title: 'TANG FRERE',
                date:'10/01/2015 06:18:08', 
                thumbnail_url : "images/popular_1.jpg", 
                content: 'TANG FRERE'
            } ,
        ],
        storeId: 'supermarketstore',
        model: "RecetteDIY.model.SupermarketModel"
    }
});