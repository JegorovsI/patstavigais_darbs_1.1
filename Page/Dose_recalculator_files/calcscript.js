// function sayHallo() {
//     alert("Page has loaded successfully!");
// }

var izrakstitsUzMlVaiTabl = document.getElementById('izrakstits_uz_mlVaiTabl').value;

function aprekinat () {
    var result;
    var izrakstitsMgSVuz = document.getElementById('izrakstits_mgSV_uz').value;
        izrakstitsUzMlVaiTabl = document.getElementById('izrakstits_uz_mlVaiTabl').value;
    var izrakstitsMlVaiTabl = document.getElementById('izrakstits_mlVaiTabl').value;
    var izrakstitsDaudzumsIepakojuma = document.getElementById('izrakstits_daudzums_iepakojuma').value;
    var izrakstitsOrig = document.getElementById('izrakstits_orig').value;        
    var izrakstitsPa = document.getElementById('izrakstits_pa').value;
    var izrakstitsPaZaluForma = document.getElementById('izrakstits_pa_zalu_forma').value;
    var izrakstitsReizesDiena = document.getElementById('izrakstits_reizes_diena').value;
    var izrakstitsDienas = document.getElementById('izrakstits_dienas').value;
    var pieejamsMgSVuz = document.getElementById('pieejams_mgSV_uz').value;
    var pieejamsUzMlVaiTabl = document.getElementById('pieejams_uz_mlVaiTabl').value;
    var pieejamsMlVaiTabl = document.getElementById('pieejams_mlVaiTabl').value;
    var pieejamsDaudzumsIepakojuma = document.getElementById("pieejams_daudzums_iepakojuma").value;

    // console.log(izrakstitsMgSVuz);
    // console.log(izrakstitsUzMlVaiTabl);
    // console.log(izrakstitsMlVaiTabl);
    // console.log(izrakstitsDaudzumsIepakojuma);
    // console.log(izrakstitsOrig);
    // console.log(izrakstitsPa);
    // console.log(izrakstitsPaZaluForma);
    // console.log(izrakstitsReizesDiena);
    // console.log(izrakstitsDienas);
    // console.log(pieejamsMgSVuz);
    // console.log(pieejamsUzMlVaiTabl);
    // console.log(pieejamsMlVaiTabl);
    // console.log(pieejamsDaudzumsIepakojuma);

    var paml, izrakstitoZaluKoncentracija, reizesDeva, reizes_diena, lietot_dienas, iepakojumu_skaits;

    //zalu koncentracija 1ml vai 1 tabletē
    if (izrakstitsMlVaiTabl === "ml") {
        izrakstitoZaluKoncentracija = izrakstitsMgSVuz / izrakstitsUzMlVaiTabl;   
    }
    else if (izrakstitsMlVaiTabl === "tabl") {
        izrakstitoZaluKoncentracija = izrakstitsMgSVuz;
    }

    var reizes_deva;
    // if ()
    // var result = paml + reizes_diena + lietot_dienas + "<br>" + iepakojumu_skaits;
    console.log("rezultats: ");
    console.log(izrakstitoZaluKoncentracija);
    if (result) {
        document.getElementById("result").innerHTML = result;
    } 
    else {
        document.getElementById("result").innerHTML = "ievadiet datus";
    }
}

function hideInput(elementSelected, elementToHide1, elementToHide2) {
    var izrakstitsMlVaiTabl = elementSelected.value;
    var objectToHide1 = document.getElementById(elementToHide1);
    var objectToHide2 = document.getElementById(elementToHide2);
    if (izrakstitsMlVaiTabl === "tabl") {
        objectToHide1.style.display = 'none';
        objectToHide2.style.display = 'none';
    }
    else if (izrakstitsMlVaiTabl === "ml") {
        objectToHide1.style.display = 'inline-block';
        objectToHide2.style.display = 'inline-block';
    }
}
    // if (izrakstitas_devas_mervieniba === "ml") {
    //     var izrakstits_viena_deva_mg = izrakstits_konc * izrakstits_deva;

    // }
    // else if (izrakstitas_devas_mervieniba === "mg") {
    //     var izrakstits_viena_deva_mg = izrakstits_deva;
    // }
    // else if (izrakstitas_devas_mervieniba === "SV") {
    //     var izrakstits_viena_deva_mg = izrakstits_deva;
    // }

    // // var pieejams_konc = pieejams_mg / pieejams_uz_ml;
    // // var no_pieejama_deva_ml = izrakstits_viena_deva_mg / pieejams_mg * pieejams pieejams_uz_ml;
    // var deva_no_pieejama_ml = izrakstits_viena_deva_mg / pieejams_mg * pieejams_uz_ml;


    // if (izrakstits_reizes_diena) {
    //     var reizes_diena = izrakstits_reizes_diena + " reizes dienā. ";
    // }
    // else {
    //     var reizes_diena = "";
    // }

    // if (izrakstits_dienam) {
    //     var dienas = izrakstits_dienam + " dienas.";
    //     var kopejais_daudzums = izrakstits_reizes_diena * deva_no_pieejama_ml.toFixed(1) * izrakstits_dienam;
    //     if (pieejams_tilpums) {
    //         var iepakojumi = kopejais_daudzums / pieejams_tilpums;
    //         var iepakojumu_skaits = iepakojumi.toFixed(1) + " iepakojumi";
    //         }
    //     else if (izrakstits_tilpums) {
    //         var iepakojumi = kopejais_daudzums / izrakstits_tilpums;
    //         var iepakojumu_skaits = iepakojumi.toFixed(1) + " iepakojumi";      
    //     }
    //     else if (izrakstits_dienam){
    //         var iepakojumu_skaits = "Kopējais daudzums: " + kopejais_daudzums + "ml";
    //     }
    //     else {
    //         var iepakojumu_skaits = "";
    //     }
    //     // var iepakojumu_skaits = kopejais_daudzums + " kopejais_daudzums";
    // }
    // else {

    // }

    // //ja nav norādīts cik ilgi jālieto , tad pieņem ka 1 iepakojumu
    // if (!izrakstits_dienam){
    // }