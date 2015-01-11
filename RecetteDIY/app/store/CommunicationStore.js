Ext.define('RecetteDIY.store.CommunicationStore', {
    extend: 'Ext.data.Store',
    alias: 'store.communicationstore',

    config: {
        data: [
            {
                title: 'Junsong',
                date:'10/01/2015 06:18:08', 
                thumbnail_url : "images/popular_1.jpg", 
                content: 'Panels are most useful as Overlays - containers that float over your appl..'
            },
            {
                title: 'Junsong',
                date:'10/01/2015 06:18:08', 
                thumbnail_url : "images/popular_1.jpg", 
                content: 'Panels are most useful as Overlays - containers that float over your appl..'
            },
            {
                title: 'Junsong',
                date:'10/01/2015 06:18:08',
                thumbnail_url : "images/popular_1.jpg", 
                content: 'Panels are most useful as Overlays - containers that float over your appl..'
            },
            {
                title: 'Junsong',
                date:'10/01/2015 06:18:08',
                thumbnail_url : "images/popular_1.jpg", 
                content: 'Panels are most useful as Overlays - containers that float over your appl..'
            }
            
        ],
        storeId: 'communicationstore',
        model: "RecetteDIY.model.CommunicationModel"
    }
});