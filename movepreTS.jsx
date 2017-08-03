#target Photoshop

//oh yeah, you can double click on the file to start it, too.
app.bringToFront()

//numberofLayerstoHide is the number of layers you don't want visable on the clean after transfer. 0 = only text layers. default is 1

//set this to how many layers in the preTS file you need hidden
var layerstoHide = prompt ("How many non-text layers are beneath the tsing? (raw = 1, no raw = 0)", 1);

if (layerstoHide == NaN || undefined || false) {
    layerstoHide = 0
    }


var TSfiles = app.openDialog ("browse for preTS files");
 
var CLfiles = app.openDialog ("browse for cleans ")

    

    
    function mainFunction () {
//sort both    
TSfiles.sort()
    
CLfiles.sort()
    
for (i=0; i < TSfiles.length; i++) {

app.open(File(TSfiles[i]));

app.open(File(CLfiles[i]));

var lastDocPosition = app.documents.length

//app.documents[lastDocPosition -1] == CLfiles
//app.documents[lastDocPosition - 2] = TSfiles


var CLfileName = app.documents[lastDocPosition -1].name  

var TSlength = app.documents[lastDocPosition -1].artLayers.length

var CLlength = app.documents[lastDocPosition -2].artLayers.length

//switch to TS file
app.activeDocument = app.documents[lastDocPosition - 1]


//====hide layers
function bottomLayers (numberofLayerstoHide) {
    for (p=0; p < numberofLayerstoHide; ++p) {
    app.activeDocument.artLayers[(TSlength) - p - 1].visible = false;
                }
            }
bottomLayers(Math.floor (layerstoHide)); //just gonna put this at the top


// =================select all the layers
var idselectAllLayers = stringIDToTypeID( "selectAllLayers" );
    var desc145902 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5747 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref5747.putEnumerated( idLyr, idOrdn, idTrgt );
    desc145902.putReference( idnull, ref5747 );
executeAction( idselectAllLayers, desc145902, DialogModes.NO );


//Duplicate to another layer function

function duplicateTs () {
var idDplc = charIDToTypeID( "Dplc" );
    var desc145897 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5742 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref5742.putEnumerated( idLyr, idOrdn, idTrgt );
    desc145897.putReference( idnull, ref5742 );
    var idT = charIDToTypeID( "T   " );
        var ref5743 = new ActionReference();
        var idDcmn = charIDToTypeID( "Dcmn" );

        ref5743.putName( idDcmn, CLfileName ); //name of document
    desc145897.putReference( idT, ref5743 );
    var idVrsn = charIDToTypeID( "Vrsn" );
    desc145897.putInteger( idVrsn, 5 );
    var idIdnt = charIDToTypeID( "Idnt" );
        var list1828 = new ActionList();
        
        for (j=0; j < TSlength; ++j) { 
            var k = j + CLlength + 5
        list1828.putInteger( k );
        }
    desc145897.putList( idIdnt, list1828 );
executeAction( idDplc, desc145897, DialogModes.NO );
}

app.activeDocument = app.documents[lastDocPosition - 1]

duplicateTs ();



//move the TSing to the top if it isn't there
app.activeDocument = app.documents[lastDocPosition - 2]

var idmove = charIDToTypeID( "move" );
    var desc145919 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5758 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref5758.putEnumerated( idLyr, idOrdn, idTrgt );
    desc145919.putReference( idnull, ref5758 );
    var idT = charIDToTypeID( "T   " );
        var ref5759 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idFrnt = charIDToTypeID( "Frnt" );
        ref5759.putEnumerated( idLyr, idOrdn, idFrnt );
    desc145919.putReference( idT, ref5759 );
executeAction( idmove, desc145919, DialogModes.NO );

//close preTS, don't save changes
app.documents[lastDocPosition - 1].close(SaveOptions.DONOTSAVECHANGES);

//close clean, save changes
app.activeDocument.close(SaveOptions.SAVECHANGES);

}
}

try {
//I have the same number of files) 
if (TSfiles !== false && CLfiles !== false && TSfiles.length == CLfiles.length) { 
    mainFunction();
    }


if (TSfiles.length !== CLfiles.length) {
    alert ("Sorry, I can't copy " +TSfiles.length + " files of TSing on to " + CLfiles.length + " cleans.");
   }
}
catch (err) {
  alert("oh no, something broke :(")
}
