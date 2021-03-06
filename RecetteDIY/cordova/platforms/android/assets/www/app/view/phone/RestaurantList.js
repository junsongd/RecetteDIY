 
Ext.define("RecetteDIY.view.phone.RestaurantList", {
   extend: "Ext.dataview.List",
   alias: "widget.restaurantlist", 
   config: {
      id: 'restaurantlist',
      Cls: 'restaurantlist', 
      Loadmask: false,
       plugins: [
        {
            xclass: 'Ext.plugin.PullRefresh',
            pullText: 'Mise à jour!',
            loadedText :'Le chargement est fini',
            loadingText :'Chargement...',
            pullRefreshText: 'Pull-down pour Mise à jour!',
            releaseText: 'Lâcher pour Mise à jour...',
            lastUpdatedText:'Dernière mise à jour'
         }
      ],
      emptyText: '</pre><div class="notes-list-empty-text">Chargement échoué, verifiez votre connexion  et relancez l\'applicaiton.</div><pre>',
      itemTpl: '<div class ="recette-list-item"><div class="recette-list-item-content"> <div class="recette-list-item-image"><img src=" {thumbnail_url}"></img></div><div class="recette-list-item-title">{title}</div> </div></div>',
      store: 'restostore'
       
    }
});