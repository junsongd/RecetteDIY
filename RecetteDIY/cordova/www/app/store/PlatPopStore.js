Ext.define('RecetteDIY.store.PlatPopStore', {
    extend: 'Ext.data.Store',
    alias: 'store.platpopstore',

    config: {
        data: [
            {
                title: 'popular_1',
                thumbnail_url : "images/popular_1.jpg",
                content: 'Panels are most useful as Overlays - containers that float over your appl..'
            },
            {
                title: 'popular_2',
                thumbnail_url : "images/popular_2.jpg",
                content: 'Panels are most useful as Overlays - containers that float over your appl..'
            },
            {
                title: 'popular_3',
                thumbnail_url : "images/popular_3.jpg",
                content: 'Panels are most useful as Overlays - containers that float over your appl..'
            },
            {
                title: 'popular_4',
                thumbnail_url : "images/popular_4.jpg",
                content: 'Panels are most useful as Overlays - containers that float over your appl..'
            },
        ],
        storeId: 'platpopstore',
        model: "RecetteDIY.model.PlatPopModel"
    }
});