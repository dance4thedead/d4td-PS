#target photoshop;  

/* ADDING NEW CONDITIONS TO THIS SCRIPT
* 1) run the "postScriptFont.jsx" to get the Post-Script name of the font. It may be different than the font name. 
* 2) add on to the SWITCH statement *before* the "default" statment using this syntax: 
*
*case "[paste the output of postScriptFont.jsx]":
*   layer.textItem.[parameter] = [value];
*   break;
*
*Don't change anything not inside the square brackets or things will break.
*/


//==============FA to BC main

//https://forums.adobe.com/thread/2252274

function doThis() {
try { 

var layer = app.activeDocument.activeLayer
            layer.textItem.autoKerning = AutoKernType.METRICS;
    // default bubbles
    switch (layer.textItem.font ) {
    
    case "000-Clementine-[TeddyBear]":
    
    case "Clementine":    
        layer.textItem.font = "CCWildWordsInt-Roman"
        break;
    
    case "Clementine-Italic":
        layer.textItem.font = "CCWildWordsInt-Italic"
        break;

    default:
break;

//close switch
}

//close try
}


catch (errr){alert ("innerloop error")
    }

}
//===================

function main() {

if(documents.length){  
    
    //save to restore later
    var originalActive = app.activeDocument.activeLayer;
    
//disable dialog boxes
app.displayDialogs = DialogModes.NO;
    
var tLayers = getTextIds();  
for(var a in tLayers){  
selectLayerByID(Number(tLayers[a]));  
doThis();
}  
};  
function selectLayerByID(ID, add) {  
    add = (add == undefined)  ? add = false : add;  
    var ref = new ActionReference();  
    ref.putIdentifier(charIDToTypeID('Lyr '), ID);  
    var desc = new ActionDescriptor();  
    desc.putReference(charIDToTypeID('null'), ref);  
    if (add) {  
        desc.putEnumerated(stringIDToTypeID('selectionModifier'), stringIDToTypeID('selectionModifierType'), stringIDToTypeID('addToSelection'));  
    }  
    desc.putBoolean(charIDToTypeID('MkVs'), false);  
    executeAction(charIDToTypeID('slct'), desc, DialogModes.NO);  
};  
function getTextIds(){   
   var ref = new ActionReference();   
   ref.putProperty( charIDToTypeID( "Prpr" ), charIDToTypeID( 'NmbL' ));  
   ref.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );   
   var count = executeActionGet(ref).getInteger(charIDToTypeID('NmbL')) +1;   
   var TextIDs=[];  
try{  
    activeDocument.backgroundLayer;  
var i = 0; }catch(e){ var i = 1; };  
   for(i;i<count;i++){   
       if(i == 0) continue;  
        ref = new ActionReference();   
        ref.putIndex( charIDToTypeID( 'Lyr ' ), i );  
        var desc = executeActionGet(ref);  
        if( desc.hasKey( stringIDToTypeID( 'textKey' ) ) ){  
         var ID = desc.getInteger(stringIDToTypeID( 'layerID' ));  
    TextIDs.push(ID);  
}  
   };   
return TextIDs;


};  

//restore active
app.activeDocument.activeLayer = originalActive;
}

app.activeDocument.suspendHistory ("text sub by dance", "main()");