var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_onedaytrip_1 = new ol.format.GeoJSON();
var features_onedaytrip_1 = format_onedaytrip_1.readFeatures(json_onedaytrip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_onedaytrip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_onedaytrip_1.addFeatures(features_onedaytrip_1);
var lyr_onedaytrip_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_onedaytrip_1, 
                style: style_onedaytrip_1,
                popuplayertitle: "one day trip",
                interactive: true,
                title: '<img src="styles/legend/onedaytrip_1.png" /> one day trip'
            });
var format_naturetrip_2 = new ol.format.GeoJSON();
var features_naturetrip_2 = format_naturetrip_2.readFeatures(json_naturetrip_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_naturetrip_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_naturetrip_2.addFeatures(features_naturetrip_2);
var lyr_naturetrip_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_naturetrip_2, 
                style: style_naturetrip_2,
                popuplayertitle: "nature trip",
                interactive: true,
                title: '<img src="styles/legend/naturetrip_2.png" /> nature trip'
            });
var format_tripto9temples_3 = new ol.format.GeoJSON();
var features_tripto9temples_3 = format_tripto9temples_3.readFeatures(json_tripto9temples_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tripto9temples_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tripto9temples_3.addFeatures(features_tripto9temples_3);
var lyr_tripto9temples_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tripto9temples_3, 
                style: style_tripto9temples_3,
                popuplayertitle: "trip to 9 temples",
                interactive: true,
                title: '<img src="styles/legend/tripto9temples_3.png" /> trip to 9 temples'
            });
var format_cafekhaotaozone_4 = new ol.format.GeoJSON();
var features_cafekhaotaozone_4 = format_cafekhaotaozone_4.readFeatures(json_cafekhaotaozone_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cafekhaotaozone_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cafekhaotaozone_4.addFeatures(features_cafekhaotaozone_4);
var lyr_cafekhaotaozone_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cafekhaotaozone_4, 
                style: style_cafekhaotaozone_4,
                popuplayertitle: "cafe khao tao zone",
                interactive: true,
                title: '<img src="styles/legend/cafekhaotaozone_4.png" /> cafe khao tao zone'
            });
var format_beachtripinhuahin_5 = new ol.format.GeoJSON();
var features_beachtripinhuahin_5 = format_beachtripinhuahin_5.readFeatures(json_beachtripinhuahin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_beachtripinhuahin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beachtripinhuahin_5.addFeatures(features_beachtripinhuahin_5);
var lyr_beachtripinhuahin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_beachtripinhuahin_5, 
                style: style_beachtripinhuahin_5,
                popuplayertitle: "beach trip in hua hin",
                interactive: true,
                title: '<img src="styles/legend/beachtripinhuahin_5.png" /> beach trip in hua hin'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_onedaytrip_1.setVisible(true);lyr_naturetrip_2.setVisible(true);lyr_tripto9temples_3.setVisible(true);lyr_cafekhaotaozone_4.setVisible(true);lyr_beachtripinhuahin_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_onedaytrip_1,lyr_naturetrip_2,lyr_tripto9temples_3,lyr_cafekhaotaozone_4,lyr_beachtripinhuahin_5];
lyr_onedaytrip_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_naturetrip_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_tripto9temples_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_cafekhaotaozone_4.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_beachtripinhuahin_5.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_onedaytrip_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_naturetrip_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_tripto9temples_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_cafekhaotaozone_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_beachtripinhuahin_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_onedaytrip_1.set('fieldLabels', {'id': 'no label', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr_naturetrip_2.set('fieldLabels', {'id': 'no label', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr_tripto9temples_3.set('fieldLabels', {'id': 'no label', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr_cafekhaotaozone_4.set('fieldLabels', {'id': 'no label', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr_beachtripinhuahin_5.set('fieldLabels', {'id': 'no label', 'name': 'header label - always visible', 'picture': 'header label - always visible', });
lyr_beachtripinhuahin_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});