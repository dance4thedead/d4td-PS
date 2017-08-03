#target Photoshop

//conditional stroke script

//known issues:
//won't on multiple layers




// =========stroke function


function stroke (redValue, greenValue, blueValue, strokeSize) {
var idsetd = charIDToTypeID( "setd" );
    var desc144479 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5078 = new ActionReference();
        var idPrpr = charIDToTypeID( "Prpr" );
        var idLefx = charIDToTypeID( "Lefx" );
        ref5078.putProperty( idPrpr, idLefx );
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref5078.putEnumerated( idLyr, idOrdn, idTrgt );
    desc144479.putReference( idnull, ref5078 );
    var idT = charIDToTypeID( "T   " );
        var desc144480 = new ActionDescriptor();
        var idScl = charIDToTypeID( "Scl " );
        var idPrc = charIDToTypeID( "#Prc" );
        desc144480.putUnitDouble( idScl, idPrc, 100.000000 );
        var idFrFX = charIDToTypeID( "FrFX" );
            var desc144481 = new ActionDescriptor();
            var idenab = charIDToTypeID( "enab" );
            desc144481.putBoolean( idenab, true );
            var idpresent = stringIDToTypeID( "present" );
            desc144481.putBoolean( idpresent, true );
            var idshowInDialog = stringIDToTypeID( "showInDialog" );
            desc144481.putBoolean( idshowInDialog, true );
            var idStyl = charIDToTypeID( "Styl" );
            var idFStl = charIDToTypeID( "FStl" );
            var idOutF = charIDToTypeID( "OutF" );
            desc144481.putEnumerated( idStyl, idFStl, idOutF );
            var idPntT = charIDToTypeID( "PntT" );
            var idFrFl = charIDToTypeID( "FrFl" );
            var idSClr = charIDToTypeID( "SClr" );
            desc144481.putEnumerated( idPntT, idFrFl, idSClr );
            var idMd = charIDToTypeID( "Md  " );
            var idBlnM = charIDToTypeID( "BlnM" );
            var idNrml = charIDToTypeID( "Nrml" );
            desc144481.putEnumerated( idMd, idBlnM, idNrml );
            var idOpct = charIDToTypeID( "Opct" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc144481.putUnitDouble( idOpct, idPrc, 100.000000 );
            var idSz = charIDToTypeID( "Sz  " );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc144481.putUnitDouble( idSz, idPxl, strokeSize );
            var idClr = charIDToTypeID( "Clr " );
                var desc144482 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc144482.putDouble( idRd, redValue);
                var idGrn = charIDToTypeID( "Grn " );
                desc144482.putDouble( idGrn, greenValue );
                var idBl = charIDToTypeID( "Bl  " );
                desc144482.putDouble( idBl, blueValue );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc144481.putObject( idClr, idRGBC, desc144482 );
            var idoverprint = stringIDToTypeID( "overprint" );
            desc144481.putBoolean( idoverprint, false );
        var idFrFX = charIDToTypeID( "FrFX" );
        desc144480.putObject( idFrFX, idFrFX, desc144481 );
    var idLefx = charIDToTypeID( "Lefx" );
    desc144479.putObject( idT, idLefx, desc144480 );
executeAction( idsetd, desc144479, DialogModes.NO );
}



//=========================





if (app.documents.length > 0) {
function mainFunction () {

     
        try {                
                //if the layer is a group folder or text layer
                if (app.activeDocument.activeLayer.typename == "LayerSet" || app.activeDocument.activeLayer.kind == "LayerKind.TEXT") {


                switch (app.activeDocument.info.city) {
                        case "1": //make it red
                            if (app.activeDocument.mode !== DocumentMode.RGB) {
                               var idCnvM = charIDToTypeID( "CnvM" );
                                var desc144498 = new ActionDescriptor();
                                var idT = charIDToTypeID( "T   " );
                                var idRGBM = charIDToTypeID( "RGBM" );
                                desc144498.putClass( idT, idRGBM );
                                var idMrge = charIDToTypeID( "Mrge" );
                                desc144498.putBoolean( idMrge, false );
                                var idRstr = charIDToTypeID( "Rstr" );
                                desc144498.putBoolean( idRstr, false );
                                executeAction( idCnvM, desc144498, DialogModes.NO );
                                }
                            
                            app.activeDocument.info.city = 2;
                            stroke (255, 0, 0, 3);
                            break;
           
                        default: //make it white
                            app.activeDocument.info.city = 1;
                            //doc.activeLayer.visible = true;                            
                            stroke (255, 255, 255, 3);                      
                            break;
                            }
                       

                     }
}


        
       //no layer selected
        catch(err) { 
        
        }
}
      }

try{
        app.activeDocument.suspendHistory ("Stroke toggle", "mainFunction ()"); 
}

catch(err2) {
    }