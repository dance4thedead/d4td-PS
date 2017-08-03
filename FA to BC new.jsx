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

function doThis() {
try { 
    
    var layer = app.activeDocument.activeLayer
            layer.textItem.autoKerning = AutoKernType.METRICS;
    // default bubbles
    switch (layer.textItem.font ) {
    
    case "CCWildWordsInt-Roman":
        
        var originalFontSize =  layer.textItem.size;
        var adjustedFontSize = (originalFontSize * .9375.toFixed(2));
        
        layer.textItem.capitalization = TextCase.NORMAL;
        layer.textItem.size = new UnitValue(adjustedFontSize,  "px");
    break;

case "CCWildWordsInt-Italic":
             var originalFontSize =  layer.textItem.size;
        var adjustedFontSize = (originalFontSize * .9375.toFixed(2));
        
             layer.textItem.verticalScale = 100;
        layer.textItem.capitalization = TextCase.NORMAL;
        layer.textItem.size = new UnitValue(adjustedFontSize,  "px");
              
              var theColorBlack = new SolidColor;
theColorBlack .rgb.red = 0;
theColorBlack .rgb.green = 0;
theColorBlack .rgb.blue = 0;

       layer.textItem.color = theColorBlack;
break;

case "CCWildWordsInt-BoldItalic":
             var originalFontSize =  layer.textItem.size;
        var adjustedFontSize = (originalFontSize * .9375.toFixed(2));
     
        layer.textItem.capitalization = TextCase.NORMAL;
        layer.textItem.size = new UnitValue(adjustedFontSize,  "px");
        layer.textItem.verticalScale = 110;
              break;

//panel text
case "CCMeanwhile-Regular":
             var originalFontSize =  layer.textItem.size;
        var adjustedFontSize = (originalFontSize * .9375.toFixed(2));
     
     layer.textItem.font = "CCWildWordsInt-Italic";
        layer.textItem.capitalization = TextCase.NORMAL;
        layer.textItem.size = new UnitValue(adjustedFontSize,  "px");
         break;
   

//scribble 
case "JosschriftBold":
             var originalFontSize =  layer.textItem.size;
        var adjustedFontSize = (originalFontSize * .75);

        var adjustedLeading = (adjustedFontSize * 1.133333.toFixed(2));
     
     layer.textItem.font = "KomikaSlim";
     layer.textItem.capitalization = TextCase.NORMAL;
        layer.textItem.size = new UnitValue(adjustedFontSize,  "px");
        layer.textItem.antiAliasMethod = AntiAlias.STRONG;
        layer.textItem.leading =new UnitValue(adjustedLeading,  "px");  
        layer.textItem.verticalScale = 115;
        layer.textItem.horizontalScale = 80;
        layer.textItem.tracking = 25;
    break;

//tl notes

case "000DigitalStripTB":
             var originalFontSize =  layer.textItem.size;
        var adjustedFontSize = (originalFontSize * 1.0714.toFixed(2));

        var adjustedLeading = (adjustedFontSize * 1.133333.toFixed(2));
     
     layer.textItem.font = "KomikaSlim";
     layer.textItem.capitalization = TextCase.NORMAL;
        layer.textItem.size = new UnitValue(adjustedFontSize,  "px");
        layer.textItem.antiAliasMethod = AntiAlias.STRONG;
        layer.textItem.leading =new UnitValue(adjustedLeading,  "px");  
        layer.textItem.verticalScale = 115;
        layer.textItem.horizontalScale = 80;
        layer.textItem.tracking = 25;
break;


//side text  and chapter title

case "Earth'sMightiest": 
case "MTOFranko":
case "MTOChancery":
             var originalFontSize =  layer.textItem.size;

        var adjustedLeading = (originalFontSize * 1.181818181.toFixed(2));
     
     layer.textItem.font = "KomikaTitle";
       layer.textItem.capitalization = TextCase.NORMAL;
        layer.textItem.size = originalFontSize;
        layer.textItem.leading =new UnitValue(adjustedLeading,  "px");  
        layer.textItem.verticalScale = 120;
break;

//announcements

case "IwaOMinPro-En-Hv":
case "HeadlineOneHPLHS":
case "BuiltTitlingRg-Regular":
case "BuiltTitlingRg-Bold":
             var originalFontSize =  layer.textItem.size;

        var adjustedLeading = (originalFontSize * .942857.toFixed(2));
     
     layer.textItem.font = "GillSansMT-ExtraCondensedBold";
       layer.textItem.capitalization = TextCase.ALLCAPS;
         layer.textItem.size = originalFontSize;
        layer.textItem.leading =new UnitValue(adjustedLeading,  "px");  

break;
//boxes

case "000ElephantmenTB":
case "MTODom-Regular":
             var originalFontSize =  layer.textItem.size;

        var adjustedLeading = (originalFontSize * 1.04);
     layer.textItem.font = "Dominican";
       layer.textItem.capitalization = TextCase.ALLCAPS;
       layer.textItem.size = originalFontSize;
        layer.textItem.leading = adjustedLeading;
        layer.textItem.verticalScale = 110;
        layer.textItem.tracking = -30;
        layer.textItem.fauxItalic = true;
    break;

//finally any font not mentioned
case "KomikaSlim" :
    break;
case "Dominican":
    break;
case "KomikaTitle":
    break;
case "DirtyFinger":
break;
    
    default:
        layer.textItem.font = "CCWildWordsInt-Roman";
         layer.textItem.useAutoLeading = true;
        layer.textItem.capitalization = TextCase.NORMAL;
        layer.textItem.verticalScale = 100;
        layer.textItem.horizontalScale = 100;
        layer.textItem.tracking = 0;
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

app.activeDocument.suspendHistory ("FA to BC v2", "main()");