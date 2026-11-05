var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_geologyclip_1 = new ol.format.GeoJSON();
var features_geologyclip_1 = format_geologyclip_1.readFeatures(json_geologyclip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geologyclip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geologyclip_1.addFeatures(features_geologyclip_1);
var lyr_geologyclip_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geologyclip_1, 
                style: style_geologyclip_1,
                popuplayertitle: 'geology clip',
                interactive: false,
                title: '<img src="styles/legend/geologyclip_1.png" /> geology clip'
            });
var format_GEOMORKTR_2 = new ol.format.GeoJSON();
var features_GEOMORKTR_2 = format_GEOMORKTR_2.readFeatures(json_GEOMORKTR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORKTR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORKTR_2.addFeatures(features_GEOMORKTR_2);
var lyr_GEOMORKTR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORKTR_2, 
                style: style_GEOMORKTR_2,
                popuplayertitle: 'GEOMOR KTR',
                interactive: false,
                title: '<img src="styles/legend/GEOMORKTR_2.png" /> GEOMOR KTR'
            });
var format_clippedroadktr_3 = new ol.format.GeoJSON();
var features_clippedroadktr_3 = format_clippedroadktr_3.readFeatures(json_clippedroadktr_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedroadktr_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedroadktr_3.addFeatures(features_clippedroadktr_3);
var lyr_clippedroadktr_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedroadktr_3, 
                style: style_clippedroadktr_3,
                popuplayertitle: 'clipped road ktr',
                interactive: false,
                title: '<img src="styles/legend/clippedroadktr_3.png" /> clipped road ktr'
            });
var format_drainageclip_4 = new ol.format.GeoJSON();
var features_drainageclip_4 = format_drainageclip_4.readFeatures(json_drainageclip_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drainageclip_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainageclip_4.addFeatures(features_drainageclip_4);
var lyr_drainageclip_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drainageclip_4, 
                style: style_drainageclip_4,
                popuplayertitle: 'drainage clip',
                interactive: false,
                title: '<img src="styles/legend/drainageclip_4.png" /> drainage clip'
            });
var format_KTR_5 = new ol.format.GeoJSON();
var features_KTR_5 = format_KTR_5.readFeatures(json_KTR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KTR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KTR_5.addFeatures(features_KTR_5);
var lyr_KTR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KTR_5, 
                style: style_KTR_5,
                popuplayertitle: 'KTR',
                interactive: true,
    title: 'KTR<br />\
    <img src="styles/legend/KTR_5_0.png" /> ALUMPARA<br />\
    <img src="styles/legend/KTR_5_1.png" /> AMBALAPPURAM<br />\
    <img src="styles/legend/KTR_5_2.png" /> AMMUMMAMUKKU<br />\
    <img src="styles/legend/KTR_5_3.png" /> AVANOOR<br />\
    <img src="styles/legend/KTR_5_4.png" /> CHANTHAMUKKU<br />\
    <img src="styles/legend/KTR_5_5.png" /> CHENTHARA<br />\
    <img src="styles/legend/KTR_5_6.png" /> COLLEGE<br />\
    <img src="styles/legend/KTR_5_7.png" /> E.T.C<br />\
    <img src="styles/legend/KTR_5_8.png" /> EYAMKUNNU<br />\
    <img src="styles/legend/KTR_5_9.png" /> GANDHI NAGAR<br />\
    <img src="styles/legend/KTR_5_10.png" /> GANDHIMUKKU<br />\
    <img src="styles/legend/KTR_5_11.png" /> ICEMUKKU<br />\
    <img src="styles/legend/KTR_5_12.png" /> K.S.R.T.C<br />\
    <img src="styles/legend/KTR_5_13.png" /> KADALAVILA<br />\
    <img src="styles/legend/KTR_5_14.png" /> KADAMKULAM<br />\
    <img src="styles/legend/KTR_5_15.png" /> KALLUVATHUKKAL<br />\
    <img src="styles/legend/KTR_5_16.png" /> KIZHAKKEKKARA<br />\
    <img src="styles/legend/KTR_5_17.png" /> KULASEKHARANALLOOR<br />\
    <img src="styles/legend/KTR_5_18.png" /> MUSLIM STREET<br />\
    <img src="styles/legend/KTR_5_19.png" /> NEELESWARAM<br />\
    <img src="styles/legend/KTR_5_20.png" /> PADINJATTINKARA<br />\
    <img src="styles/legend/KTR_5_21.png" /> PALAMOODU<br />\
    <img src="styles/legend/KTR_5_22.png" /> PAZHAYATHERUVU<br />\
    <img src="styles/legend/KTR_5_23.png" /> PULAMON TOWN<br />\
    <img src="styles/legend/KTR_5_24.png" /> RAILWAY STATION<br />\
    <img src="styles/legend/KTR_5_25.png" /> SASTHAMMUKAL<br />\
    <img src="styles/legend/KTR_5_26.png" /> THOTTOM MUKKU<br />\
    <img src="styles/legend/KTR_5_27.png" /> THRIKKANNAMANGAL<br />\
    <img src="styles/legend/KTR_5_28.png" /> TOWN<br />\
    <img src="styles/legend/KTR_5_29.png" /> VELAMKONAM<br />\
    <img src="styles/legend/KTR_5_30.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_geologyclip_1.setVisible(true);lyr_GEOMORKTR_2.setVisible(true);lyr_clippedroadktr_3.setVisible(true);lyr_drainageclip_4.setVisible(true);lyr_KTR_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_geologyclip_1,lyr_GEOMORKTR_2,lyr_clippedroadktr_3,lyr_drainageclip_4,lyr_KTR_5];
lyr_geologyclip_1.set('fieldAliases', {'fid': 'fid', 'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_GEOMORKTR_2.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_clippedroadktr_3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Length': 'Length', });
lyr_drainageclip_4.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', });
lyr_KTR_5.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_geologyclip_1.set('fieldImages', {'fid': '', 'ROCK_GROUP': '', 'NAME': '', });
lyr_GEOMORKTR_2.set('fieldImages', {'fid': '', 'NAME': '', 'TYPE1': '', 'TYPE2': '', });
lyr_clippedroadktr_3.set('fieldImages', {'fid': '', 'NAME': '', 'Length': '', });
lyr_drainageclip_4.set('fieldImages', {'fid': '', 'ORDER1': '', });
lyr_KTR_5.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_geologyclip_1.set('fieldLabels', {'fid': 'no label', 'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_GEOMORKTR_2.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_clippedroadktr_3.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'Length': 'no label', });
lyr_drainageclip_4.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', });
lyr_KTR_5.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_KTR_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});