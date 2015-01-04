Ext.define('RecetteDIY.controller.IngredientController', {
     extend: 'Ext.app.Controller',   
     config: {
        
    },

    init: function() {
       
      
    }  ,
    calculDensite :function(){
     
     var date_de_semis_value = parseInt(Ext.getCmp('selectfield-densite-date-de-semis').getValue());
     var condition_implantation_value = parseInt(Ext.getCmp('selectfield-densite-condition-de-implantation').getValue());
     var poids_de_mille_grains = parseFloat(Ext.getCmp('poids-slider').getValue());
     var surface_grains = parseInt(Ext.getCmp('surface-slider').getValue()); 
     var densite_semis_result =  ((date_de_semis_value + condition_implantation_value)*poids_de_mille_grains)/100 ;
     Ext.getCmp('densite-right').setHtml('');
     Ext.getCmp('densite-right').setHtml('Result : \n' + densite_semis_result);
       
    },
    showMaturiteInfoMessage : function(){ 
            showConfirm();
             // process the confirmation dialog result
            function onConfirm(buttonIndex) {
            }
            // Show a custom confirmation dialog
            //
            function showConfirm() {
                navigator.notification.confirm(
                    'Marurite infos !', // message
                     onConfirm,            // callback to invoke with index of button pressed
                    'Marurite',           // title
                    ['Ne plus affiche','Fermer']         // buttonLabels
                 );
            }
    },
     showDentiteSemiseInfoMessage : function(){ 
            
            showConfirm();
             // process the confirmation dialog result
    function onConfirm(buttonIndex) {
     }
            // Show a custom confirmation dialog
            //
            function showConfirm() {
                navigator.notification.confirm(
                    'Densité semis infos !', // message
                     onConfirm,            // callback to invoke with index of button pressed
                    'Densité semis',           // title
                    ['Ne plus affiche','Fermer']         // buttonLabels
                 );
                }
    },

    getTemperatureStationOptions : function ()

    {
        var temperaturestore = Ext.getStore('temperaturestore');
        var temperaturestore_items =  temperaturestore.data.all;
        var stationlist = []; 
        for ( var i=0; i < temperaturestore_items.length; i++ ){
             var poste = temperaturestore_items[i].data.POSTE;
             var stationname = temperaturestore_items[i].data.NOM;
             // check if the name exist in the list
             if( stationlist.indexOf(stationname) == -1)
            {
                  stationlist.push(stationname); 
            }
            else
            {
                window.console.log('already exist');
            }
        }
         // create the select field options 
        var selectfield_options = []; 
        for ( var i=0; i < stationlist.length; i++ ){ 
                var stationObject = {};
                stationObject.text = stationlist[i];
                stationObject.value = stationlist[i]; 
                selectfield_options.push(stationObject); 
        }
        //set options for the picker
        var zone_picker = Ext.getCmp('selectfield-zone').setOptions( selectfield_options ); 
    } ,

    calculTemperatureTotal : function ()
    { 
 
         var date_semis_value = Ext.getCmp('datepickerfield-date-de-semis').getFormattedValue();  
         var elem = date_semis_value.split('/');
         var day_value = elem[0];
         var month_value = elem[1];
         var year_value = elem[2];
         var date_semis_value_converted =  elem[2] +  elem[1] + elem[0] ;
         var date_semis_value_converted_int = parseInt(date_semis_value_converted);
         var s= Ext.getStore('temperaturestore');
         var zone_picker_value = Ext.getCmp('selectfield-zone').getValue();
         s.filter('NOM',zone_picker_value);
            // Changer le forma de la date.
            var sum =0; 
            for (var i = s.data.items.length -1; i> 0; i--)
            {  
                if (this.convertDateFormat(s.data.items[i].data.DATE) >= date_semis_value_converted_int) 
                { 
                    window.console.log(parseInt(s.data.items[i].data.TX));
                    sum = sum + parseInt(s.data.items[i].data.TX);
                } 
            } 
            Ext.getCmp('maturite-right').setHtml (''); 
            Ext.getCmp('maturite-right').setHtml ('Somme de température :<br/>' + sum);  
            s.clearFilter(); 
    } , 
    convertDateFormat : function (date_int)
    {
       var date = ""; 
       date_string = date_int.toString();
       date = date_string.substring(4, 8) + date_string.substring(2, 4)+ date_string.substring(0, 2); 
       return parseInt(date) ;
    }   
});
