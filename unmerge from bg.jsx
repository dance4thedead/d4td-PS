#target photoshop
//
// unmerge.jsx
//

//
// Generated Tue Apr 25 2017 20:58:18 GMT-0400
//



//=======Check that pattern exists=====

//check the pattern folder for the origin pattern
var originPatternLocation = app.path + "/Presets/Patterns/origin.pat";

//patternExists witll return either  "true" or "false"
var patternExists = File (originPatternLocation).exists;

if (patternExists == false) {
    alert("message d4td or k3y for the password.")
    };

//================
//remmber the active layer values

//current layer
var originalPatternLayer = app.activeDocument.activeLayer;

//remember the fill opactity of the current layer
var originalOpacity = originalPatternLayer.opacity;

//remember the blendmode of the current layer
var originalBlendMode = originalPatternLayer.blendMode;

//remember the name of the current layer
var originalName = originalPatternLayer.name;

//=======
cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };



//
//==================== Action 28 ==============
//
function Action28() {
  // Set the  selection to the transparent pixels
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Trsp'));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set the selection as an alpha channel
  function step1a(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
     var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
    };

  // Make the pattern layer
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "new pattern layer");
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putString(cTID('Nm  '), "origin screentone");
    desc4.putString(cTID('Idnt'), "6510273e-712b-11e6-ad42-d2b3d2666fad");
    desc3.putObject(cTID('Ptrn'), cTID('Ptrn'), desc4);
    desc2.putObject(cTID('Type'), sTID("patternLayer"), desc3);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Reset the patten layer blend mode 
function step3(enabled, withDialog) {
    var newPatternLayer = activeDocument.artLayers.getByName("new pattern layer");
    app.activeDocument.activeLayer = newPatternLayer;  
    newPatternLayer.blendMode = originalBlendMode;
    };
  
  // Reset the patten layer opacity
 function step4(enabled, withDialog) {
 var newPatternLayer = activeDocument.artLayers.getByName("new pattern layer");
    app.activeDocument.activeLayer = newPatternLayer;      
     newPatternLayer.opacity = originalOpacity;
     };

  // Rasterize the pattern fill layer
  function step6(enabled, withDialog) {
 var newPatternLayer = activeDocument.artLayers.getByName("new pattern layer");
    app.activeDocument.activeLayer = newPatternLayer;      
    newPatternLayer.rasterize (RasterizeType.FILLCONTENT);
  };


  // Delete the old patten layer
  function step9(enabled, withDialog) {
originalPatternLayer.remove();
  };

//Rename the new pattern layer with the old pattern name
    function step10(enabled, withDialog) {
 var newPatternLayer = activeDocument.artLayers.getByName("new pattern layer");
    app.activeDocument.activeLayer = newPatternLayer;         
        newPatternLayer.name = originalName
    };


  step1();      // Select transparent
  step1a();     //Set selection to channel
  step2();      // Make pattern layer
  step3();      // Set
  step4();      // Set
  step6();      // Rasterize
  step9();      // Delete the original pattern layer
  step10(); // Rename
};



//=========================================
//                    Action28.main
//=========================================
//

function catchFunction() {
   app.activeDocument.selection.deselect()
   alert("Pattern layer must be selected");
   };

try {
    app.activeDocument.suspendHistory ("Unmerge Pattern Script", "mainFunction()")
    }
catch(err){
app.activeDocument.suspendHistory ("No layer selected alert", "catchFunction()")   

    };

function mainFunction() {   
        if (patternExists == true) {
                if (app.activeDocument.activeLayer == undefined) {
                app.activeDocument.activeLayer = 0;
                alert("Pattern layer must be selected");
                };
    
            Action28.main = function () {
            Action28();
             };

        Action28.main();

};
};


// EOF

"unmerge.jsx"
// EOF
