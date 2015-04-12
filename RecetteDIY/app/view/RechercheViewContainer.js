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
                    id:'epice-select',
                     defaultPhonePickerConfig : {
                                                      doneButton : 'Valider',
                                                      cancelButton : 'Annuler'
                                                 },
                    options: [{
                        text: 'Sans',
                        value: 'No'
                    }, {
                        text: 'Faible',
                        value: 'Weak'
                    }, {
                        text: 'Normal',
                        value: 'Normal'
                    },
                    {
                        text: 'Fort',
                        value: 'Strong'
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
                    id:'difficulte-select',
                     defaultPhonePickerConfig : {
                                                    doneButton : 'Valider',
                                                    cancelButton : 'Annuler'
                                                },
                    options: [ 
                     {
                        text: 'Facile',
                        value: "Easy"
                    },
                    {
                        text: 'Normal',
                        value: 'Normal'
                    },
                     {
                        text: 'Diffcile',
                        value: 'Difficult'
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
                      id:'time-select',
                     defaultPhonePickerConfig : {
                                                      doneButton : 'Valider',
                                                      cancelButton : 'Annuler'
                                                 },
                    options: [{
                        text: 'Court',
                        value: 'Short'
                    }, {
                        text: 'Normal',
                        value:'Normal'
                    }, {
                        text: 'Long',
                        value: 'Long'
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
                                      
                                     RecetteDIY.app.getController('RechercheController').searchPlats(); 

                                        Ext.getCmp('recherche_navigation_view').push(
                                         {
                                            xtype: 'recetterechercheresultview',
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