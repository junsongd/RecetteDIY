Ext.define("RecetteDIY.view.RechercheViewContainer", {
   extend: 'Ext.Container',
   xtype: 'rechercheviewcontainer',
   config: {
      id: 'rechercheviewcontainer', 
       width: '100%',  
      layout:'vbox',  
        
      items: [
        
           {
                xtype: 'fieldset',
                items: [{
                    xtype: 'selectfield',
                    label: 'Piment:',
                    name: 'epice-select',
                    options: [{
                        text: 'Sans',
                        value: 0
                    }, {
                        text: 'Faible',
                        value: 1
                    }, {
                        text: 'Normal',
                        value: 2
                    },
                    {
                        text: 'Fort',
                        value: 3
                    } 
                    ], // options
                    listeners: {
                        change: function (select, newValue, oldValue) {
                           
                        } // change
                    } // listeners
                }] // items (fieldset)
            },
                {
                xtype: 'fieldset',
                items: [{
                    xtype: 'selectfield',
                    label: 'Difficulté:',
                    name: 'difficulte-select',
                    options: [{
                        text: 'Indifférent',
                        value: 0
                    }, {
                        text: 'Facile',
                        value: 1
                    }, {
                        text: 'Diffcile',
                        value: 2
                    },
                    {
                        text: 'Très difficile',
                        value: 3
                    } 
                    ], // options
                    listeners: {
                        change: function (select, newValue, oldValue) {
                           
                        } // change
                    } // listeners
                }] // items (fieldset)
            },
              {
                xtype: 'fieldset',
                items: [{
                    xtype: 'selectfield',
                    label: 'Temps:',
                    name: 'time-select',
                    options: [{
                        text: 'Court',
                        value: 0
                    }, {
                        text: 'Normal',
                        value: 1
                    }, {
                        text: 'Long',
                        value: 2
                    } 
                    ], // options
                    listeners: {
                        change: function (select, newValue, oldValue) {
                           
                        } // change
                    } // listeners
                }] // items (fieldset)
            },
             {
                xtype:'panel',
                width:'70%',
                height:'50px', 
                cls:'recherche-container-line ', 
                items:[  
                          {
                                xtype: 'button',
                                html: 'Recherche',
                                cls:'recherche-button',
                                width:'100%' ,
                                listeners:{
                                    tap : function(){
                                        Ext.getCmp('recherche_navigation_view').push(
                                         {
                                            xtype: 'recetteview',
                                            title: 'Résultats'
                                          }
                                        );  
                                     
                                      
                                    }
    
                                 }
                           }  

                       ]
            }  
            


      ],
   },
   initialize: function() {
     
     
   }

});