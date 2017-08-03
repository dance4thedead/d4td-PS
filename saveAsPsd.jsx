var nameWithExtension = app.activeDocument.name;
var nameWithoutExtension = nameWithExtension.split(".")[0];

var psdOptions = new PhotoshopSaveOptions
psdOptions.alphaChannels = true;
psdOptions.layers = true;

app.activeDocument.saveAs(new File(app.activeDocument.path+'/'+ nameWithoutExtension + '.psd'), psdOptions, true)