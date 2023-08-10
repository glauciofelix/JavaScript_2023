// MANIPULAR O BOM
/* let versao = navigator.userAgent;
let versao2 = navigator.appVersion;
console.log(versao);
console.log(versao2);

let teste = screen.width;
console.log(teste);

let largura = screen.height;
console.log(largura); */

// MANIPULAR O DOM
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(MinhaPosicao);
} else {
    document.getElementById("bom_dom").innerHTML = "Geolocalização não suportado por este Browser";
}

function MinhaPosicao(posicao) {
    document.getElementById("bom_dom").innerHTML = "Latitude: " + posicao.coords.latitude + "<br>" + "Longitude: " + posicao.coords.longitude;
}