let mymap = L.map('mymap').setView([-7.9008559,110.4345703],11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

// let basemap = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
//   maxZoom: 20,
//   subdomains: ["mt0", "mt1", "mt2", "mt3"],
//   attribution: 'Google | <a href="#">unsorry@2020</a>'
// });
// basemap.addTo(mymap);

mymap.createPane("pane_batasdesa");
mymap.getPane("pane_batasdesa").style.zIndex = 301;
let batasDesa = L.geoJson(null, {
    pane: "pane_batasdesa",
    style: function(feature) {
        return {
            fillColor: "red",
            fillOpacity: 0,
            color: "#50d900",
            weight: 2,
            opacity: 1,
            interactive: false
        }
    },
    onEachFeature: function (feature, layer){
        let content = 'Desa ' + layer.feature.properties.Desa.toString();
        layer.bindTooltip(content, {
            direction: 'center',
            permanent: true,
            className: 'styleLabelDesa'
        });
    }
});

$.getJSON("geojson/dataraw/batasDesa.geojson", function (data) {
    batasDesa.addData(data);
    mymap.addLayer(batasDesa);
    mymap.fitBounds(batasDesa.getBounds());
});

// function batasdesa() {

//     console.log("load data");

//     $.getJSON("geojson/batasdesa/1_sedayu_argodadi.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/2_sedayu_argosari.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/3_sedayu_argorejo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/4_sedayu_argomulyo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/5_piyungan_srimulyo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/6_piyungan_sitimulyo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/7_piyungan_srimartani.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/8_sanden_murtigading.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/9_sanden_gadingharjo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/10_sanden_srigading.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/11_sanden_gadingsari.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/12_kretek_tritomulyo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/13_kretek_tirtohargo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/14_kretek_parangtritis.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/15_kretek_donotirto.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/16_kretek_tirtosari.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/17_pandak_triharjo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/18_pandak_caturharjo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/19_pandak_wijirejo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/20_pandak_gilangharjo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/21_banguntapan_jambidan.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/22_banguntapan_baturetno.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/23_banguntapan_potorono.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/24_banguntapan_banguntapan.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/25_banguntapan_singosaren.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/26_banguntapan_tamanan.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/27_banguntapan_wirokerten.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/28_bambang_lipuro_sumbermulyo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/29_bambang_lipuro_sidomulyo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/30_bambang_lipuro_mulyodadi.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/31_jetis_trimulyo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/32_jetis_sumberagung.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/33_jetis_canden.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/34_jetis_patalan.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/35_pundong_srihardono.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/36_pundong_panjangrejo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/37_pundong_seloharjo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

//     $.getJSON("geojson/batasdesa/38_sewon_bangunharjo.geojson", function(data){
//         batasDesa.addData(data);
//         mymap.addLayer(batasDesa);
//     });

// }

// batasdesa();

mymap.createPane("pane_bataskecamatan");
mymap.getPane("pane_bataskecamatan").style.zIndex = 302;
let batasKecamatan = L.geoJson(null, {
    pane: "pane_bataskecamatan",
    style: function(feature) {
        return {
            fillOpacity: 0,
            color: "yellow",
            weight: 3,
            opacity: 1,
            interactive: false
        };
    },
    onEachFeature: function (feature, layer) {
        var content = 'Kec. ' + layer.feature.properties.Kecamatan.toString();
        layer.bindTooltip(content, {
          direction: 'center',
          permanent: true,
          className: 'styleLabelKecamatan'
        });
    }
});

$.getJSON("geojson/dataraw/batasKecamatan.geojson", function (data) {
    batasKecamatan.addData(data);
    mymap.addLayer(batasKecamatan);
});

// $.getJSON("geojson/bataskecamatan/1_sedayu.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/2_piyungan.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/3_sanden.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/4_kretek.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/5_pandak.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/6_banguntapan.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/7_bambang_lipuro.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/8_jetis.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/9_pundong.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/10_sewon.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/11_bantul.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/12_kasihan.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/13_srandakan.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/14_pajangan.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/15_dlingo.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/16_pleret.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

// $.getJSON("geojson/bataskecamatan/17_imogiri.geojson", function(data){
//     batasKecamatan.addData(data);
//     mymap.addLayer(batasKecamatan);
// });

resetLabels([batasDesa, batasKecamatan]);
mymap.on("zoomend", function(){
    if (mymap.getZoom() <= 12) {
        mymap.removeLayer(batasDesa);
        resetLabels([batasKecamatan]);
    } else if (mymap.getZoom() > 12) {
        mymap.addLayer(batasDesa);
        // batasdesa();
        resetLabels([batasDesa, batasKecamatan]);
    }
});

mymap.on("move", function(){
    resetLabels([batasDesa, batasKecamatan]);
});

mymap.on("layeradd", function(){
  resetLabels([batasDesa, batasKecamatan]);
});

mymap.on("layerremove", function(){
  resetLabels([batasDesa, batasKecamatan]);
});

L.control.scale({
    maxWidth: 150,
    imperial: false,
  }).addTo(mymap);

  var legend_div = new L.Control({position: 'bottomright'});
  legend_div.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'legend');
    this._div.innerHTML = '<div id="legend-title">Legenda</div><hr><svg width="32" height="16"><line x1="0" y1="11" x2="32" y2="11" style="stroke-width:4;stroke:rgb(255, 255, 0);" /></svg> Batas Kecamatan<br><svg width="32" height="16"><line x1="0" y1="11" x2="32" y2="11" style="stroke-width:1;stroke:rgb(80, 217, 0);" /></svg> Batas Desa';
    return this._div;
  };
  legend_div.addTo(mymap);
