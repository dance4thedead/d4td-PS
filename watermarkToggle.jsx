//toggle between the 5 logos


switch (app.activeDocument.info.city) {
                        case "1": 
                            
                            app.activeDocument.info.city = 2;
                            app.activeDocument.layerSets[4].opacity = 0
                            app.activeDocument.layerSets[0].opacity = 100
                            
                            break;
                            
                            case "2":
                            app.activeDocument.info.city = 3;
                            app.activeDocument.layerSets[0].opacity = 0
                            app.activeDocument.layerSets[1].opacity = 100
                            break;
                            
                            case "3":
                            app.activeDocument.info.city = 4;
                            app.activeDocument.layerSets[1].opacity = 0
                            app.activeDocument.layerSets[2].opacity = 100
                            break;
                            
                            case "4":
                            app.activeDocument.info.city = 5;
                            app.activeDocument.layerSets[2].opacity = 0
                            app.activeDocument.layerSets[3].opacity = 100
                            break;
           
                        default: 
                        app.activeDocument.info.city = 1;
                        app.activeDocument.layerSets[3].opacity = 0
                        app.activeDocument.layerSets[4].opacity = 100
                                                      
                                               
                            break;
                            }