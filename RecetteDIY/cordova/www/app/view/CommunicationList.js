 
Ext.define("RecetteDIY.view.CommunicationList", {
   extend: "Ext.dataview.List",
   alias: "widget.communicationlist", 
   config: {
      id: 'communicationlist',
      Cls: 'communicationlist', 
      Loadmask: false, 
      emptyText: '</pre><div class="notes-list-empty-text">Chargement échoué, verifiez votre connexion  et relancez l\'applicaiton.</div><pre>',
      itemTpl:  '<div class ="message-list-item"><div class="message-list-item-content"> <div class="message-list-item-author">{title}</div>  <div class="message-list-item-date">{date}</div> <div class="message-list-item-image"><img src="{thumbnail_url}"></img></div> <div class="message-list-item-message">{content:ellipsis(150, true)}</div>  </div> </div>',
      store: 'communicationstore'

       
    }
});
