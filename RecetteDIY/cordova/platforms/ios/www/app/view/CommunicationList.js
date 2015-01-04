 
Ext.define("RecetteDIY.view.CommunicationList", {
   extend: "Ext.dataview.List",
   alias: "widget.communicationlist", 
   config: {
      id: 'communicationlist',
      Cls: 'communicationlist', 
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
      itemTpl: '<div class ="message-list-item"><div class="message-list-item-content"> <div class="message-list-item-author">{author}</div> <div class="message-list-item-date">{date}</div><div class="message-list-item-message">{message:ellipsis(150, true)}</div></div></div>',
      data: [
             { title: '',   author: ' Jhon DOE' ,date :' il y a heures', message :'Lorem ipsum dolor sit amet, modo legere ius cu, posidonium appellantur vix no. An his persius signiferumque. Quo illum delicata postulant in, facilis maiestatis per id, an duo verear accumsan. No mel clita dolore facete, magna integre docendi vel id. Movet laudem detracto mel ea. No tation lobortis pro, ius scripserit omittantur ad.' },
             { title: 'Lin & Innovation, perspectives d\'avenir  ?',   author: ' Jhon DOE' ,date :' il y a heures', message :'Lorem ipsum dolor sit amet, modo legere ius cu, posidonium appellantur vix no. An his persius signiferumque. Quo illum delicata postulant in, facilis maiestatis per id, an duo verear accumsan. No mel clita dolore facete, magna integre docendi vel id. Movet laudem detracto mel ea. No tation lobortis pro, ius scripserit omittantur ad.' },
             { title: 'Lin & Innovation, perspectives d\'avenir   ?',   author: ' Jhon DOE' ,date :' il y a heures', message :'Lorem ipsum dolor sit amet, modo legere ius cu, posidonium appellantur vix no. An his persius signiferumque. Quo illum delicata postulant in, facilis maiestatis per id, an duo verear accumsan. No mel clita dolore facete, magna integre docendi vel id. Movet laudem detracto mel ea. No tation lobortis pro, ius scripserit omittantur ad.' },
             { title: 'Lin & Innovation, perspectives d\'avenir  ?',   author: ' Jhon DOE' ,date :' il y a heures', message :'Lorem ipsum dolor sit amet, modo legere ius cu, posidonium appellantur vix no. An his persius signiferumque. Quo illum delicata postulant in, facilis maiestatis per id, an duo verear accumsan. No mel clita dolore facete, magna integre docendi vel id. Movet laudem detracto mel ea. No tation lobortis pro, ius scripserit omittantur ad.' },
             { title: 'Lin & Innovation, perspectives d\'avenir   ?',   author: ' Jhon DOE' ,date :' il y a heures', message :'Lorem ipsum dolor sit amet, modo legere ius cu, posidonium appellantur vix no. An his persius signiferumque. Quo illum delicata postulant in, facilis maiestatis per id, an duo verear accumsan. No mel clita dolore facete, magna integre docendi vel id. Movet laudem detracto mel ea. No tation lobortis pro, ius scripserit omittantur ad.' },

           ] 
       
    }
});
