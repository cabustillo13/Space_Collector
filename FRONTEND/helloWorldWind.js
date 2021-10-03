//const path = require("path/posix");

// Create a WorldWindow for the canvas.
var wwd = new WorldWind.WorldWindow("canvasOne");

wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());

//wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

wwd.addLayer(new WorldWind.AtmosphereLayer());

// Add a placemark
var placemarkLayer = new WorldWind.RenderableLayer();
wwd.addLayer(placemarkLayer);

var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

//Concideraciones generales de puntos
placemarkAttributes.imageOffset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.3,
    WorldWind.OFFSET_FRACTION, 0.0);

placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.5,
    WorldWind.OFFSET_FRACTION, 1.0);

placemarkAttributes.imageSource = "./images/IconoSateliteR.png"//WorldWind.configuration.baseUrl + "images/pushpins/castshadow-red.png";
//--------------------------------------------------

//Orbitas
// Generales
var pathLayer = new WorldWind.RenderableLayer();
wwd.addLayer(pathLayer);

var pathAttributes = new WorldWind.ShapeAttributes(null);
pathAttributes.interiorColor = new WorldWind.Color(0, 1, 1, 0.75);
pathAttributes.outlineColor = WorldWind.Color.RED;
pathAttributes.drawOutline = true;
pathAttributes.applyLighting = false;

//--------------------------------------------------------------------------------------//
//Objeto 1

var camino1 = [];
camino1.push(new WorldWind.Position(60.1, 4.6, 836786));
camino1.push(new WorldWind.Position(-44.5, -27.8, 859705));
camino1.push(new WorldWind.Position(-28.9, 158.6, 856694));
camino1.push(new WorldWind.Position(74.3,111.7,840759));
camino1.push(new WorldWind.Position(-3.5,-41.96,838160));
//camino1.push(new WorldWind.Position(60.3, 4.6, 836786));

var path1 = new WorldWind.Path(camino1, pathAttributes);
pathLayer.addRenderable(path1);

//      Ubicacion1
var position1 = new WorldWind.Position(74.3,111.7,840759);
var placemark1 = new WorldWind.Placemark(position1, true, placemarkAttributes);
placemark1.label = "Fengyun-1C Deb";
 
placemark1.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark1);

//--------------------------------------------------------------------------------------//
//Objeto 2

var camino2 = [];
camino2.push(new WorldWind.Position(21.6, -22.3,1135722));
camino2.push(new WorldWind.Position(-63.2,42.3,984239));
camino2.push(new WorldWind.Position(2.10,153.7,973920));
camino2.push(new WorldWind.Position(62,-94,1150120));

var path2 = new WorldWind.Path(camino2, pathAttributes);
pathLayer.addRenderable(path2);

//      Ubicacion
var position2 = new WorldWind.Position(2.10,153.7,973920);
var placemark2 = new WorldWind.Placemark(position2, false, placemarkAttributes);

placemark2.label = "COSMOS-970" ;
placemark2.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark2);
//--------------------------------------------------------------------------------------//
//Objeto 3

var camino3 = [];
camino3.push(new WorldWind.Position(9.4,-148, 613532));
camino3.push(new WorldWind.Position(-76.2,57.6,670631));
camino3.push(new WorldWind.Position(31.52,10.76,642455));
camino3.push(new WorldWind.Position(36.67,-165.92,614931));

var path3 = new WorldWind.Path(camino3, pathAttributes);
pathLayer.addRenderable(path3);

//      Ubicacion
var position3 = new WorldWind.Position(-76.2,57.6,670631);
var placemark3 = new WorldWind.Placemark(position3, false, placemarkAttributes);

placemark3.label = "RUBIN-8" ;
placemark3.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark3);
//--------------------------------------------------------------------------------------//
//Objeto 4
//      Ubicacion

var camino4 = [];
camino4.push(new WorldWind.Position(-11.6,165.6,671994));
camino4.push(new WorldWind.Position(78.27,19.8,689331));
camino4.push(new WorldWind.Position(-28.1,-35.48,696121));
camino4.push(new WorldWind.Position(-41.9,148.74,685868));

var path4 = new WorldWind.Path(camino4, pathAttributes);
pathLayer.addRenderable(path4);

//      Ubicacion1
var position4 = new WorldWind.Position(-28.1,-35.48,696121);
var placemark4 = new WorldWind.Placemark(position4, true, placemarkAttributes);

placemark4.label = "RUBIN4"; 
placemark4.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark4);


//--------------------------------------------------------------------------------------//
//Objeto 5

var camino5 = [];
camino5.push(new WorldWind.Position(-69.5,16.13,1171));
camino5.push(new WorldWind.Position(34.6,-12.4,463895));
camino5.push(new WorldWind.Position(24.01,167,506442));
camino5.push(new WorldWind.Position(-78.2,125.7,1186441));

var path5 = new WorldWind.Path(camino5, pathAttributes);
pathLayer.addRenderable(path5);

//      Ubicacion5
var position5 = new WorldWind.Position(24.01,167,506442);
var placemark5 = new WorldWind.Placemark(position5, true, placemarkAttributes);
placemark5.label = "MICROSAT-R DEB";
 
placemark5.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark5);

//--------------------------------------------------------------------------------------//



var logError = function (jqXhr, text, exception) {
    console.log("There was a failure retrieving the capabilities document: " +
        text +
    " exception: " + exception);
};

$.get(serviceAddress).done(createLayer).fail(logError);



