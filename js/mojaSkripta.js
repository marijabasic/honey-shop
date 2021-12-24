
var nizNav = [
	{ link:"index.html", tekst: "Početna"},
	{ link:"#proizvodi", tekst: "Proizvodi"},
	{ link:"galerija.html", tekst: "Galerija"},
	{ link:"autor.html", tekst: "O autoru"}
];
var nizVrsteMeda = [
	{ value: "B", vrsta: "Bagremov" },
	{ value: "LI", vrsta: "Livadski" },
	{ value: "LV", vrsta: "Lipov" },
	{ value: "C", vrsta: "Cvetni" },
	{ value: "R", vrsta: "Repičin" },
	{ value: "M", vrsta: "Mešani" }
];
var nizFaFa = [
	{ link2: "https://www.facebook.com/", fafa: "fab fa-facebook-square"},
	{ link2: "https://www.instagram.com/", fafa: "fab fa-instagram"},
	{ link2: "rss.xml", fafa: "fa fa-rss"},
	{ link2: "sitemap.xml", fafa: "fas fa-sitemap"}
];
var nizGalerija = [
	{ velika: "images/med1.jpg", mala: "images/med11.jpg", alt: "med", opis: "Med" },
	{ velika: "images/med2.jpg", mala: "images/med22.jpg", alt: "med i saće", opis: "Med i saće" },
	{ velika: "images/zaico2.jpg", mala: "images/med99.jpg", alt: "kašika meda", opis: "Kasika meda" },
	{ velika: "images/med8.jpg", mala: "images/med88.jpg", alt: "tegle meda", opis: "Tegle meda" },
	{ velika: "images/med5.jpg", mala: "images/med55.jpg", alt: "pčelar", opis: "Pčelar" },
	{ velika: "images/med6.jpg", mala: "images/med66.jpg", alt: "pčela", opis: "Pčela" },
	{ velika: "images/med4.jpg", mala: "images/med44.jpg", alt: "pčele", opis: "Pčele" },
	{ velika: "images/med10.jpg", mala: "images/med100.jpg", alt: "med i kašika", opis: "Med i kašika" },
];


function provera() {
	var dobro="";
	var lose="";
	var greske=document.getElementById("greske");
	var nizGreske=[];
	//var nizDobro=[];
	var reIme=/^[A-ZŽŠĐČĆ][a-zšđčćž]{2,11}$/;
    var rePrezime=/^([A-ZŽŠĐČĆ][a-zšđčćž]{2,15})(\s[A-ZŽŠĐČĆ][a-zšđčćž]{2,15})*$/;
    var reEmail=/^\w+([\.\-]\w+)*@\w+([\.\-]\w+)*(\.\w{2,4})+$/;
	var reTelefon=/^06[0-9]\d{7,8}$/;
	var ime=document.getElementById("tbIme");
	var prezime=document.getElementById("tbPrezime");
	var email=document.getElementById("tbEmail");
	var telefon=document.getElementById("tbTelefon");
	var volite=document.getElementsByName("med");
	var voliteIzbor="";
	for  (var i=0; i<volite.length; i++) {
		if(volite[i].checked) {
			voliteIzbor=volite[i].value;
			break;
		}
	}
	var vrstaLista=document.getElementById("listaVrstaMeda");
	var vrstaIzbor=vrstaLista.options[vrstaLista.selectedIndex].value;
	if(!reIme.test(ime.value)) {
		nizGreske.push("Unesite ispravno ime");
	}
	if(!rePrezime.test(prezime.value)) {
		nizGreske.push("Unesite ispravno prezime");
	} /*else {
		nizDobro.push(prezime.value);
	}*/
	if(!reEmail.test(email.value)) {
		nizGreske.push("Niste dobro uneli email");
	 } //else {
		// nizDobro.push(email.value);
	// }
	if(!reTelefon.test(telefon.value)) {
		nizGreske.push("Unesite ispravno telefon");
	 } //else {
		// nizDobro.push(telefon.value);
	// }
	if(voliteIzbor="") {
		nizGreske.push("Izaberite odgovor");
	 } //else {
		// nizDobro.push(voliteIzbor);
	// }
	if(vrstaIzbor==0) {
		nizGreske.push("Izaberite vrstu");
	} //else {
		// nizDobro.push(vrstaIzbor);
	// }
	if(nizGreske.length==0) {
		alert("Uspesno ste se registrovali")
	} else{
            lose+="<ul>";
            for (let i = 0; i < nizGreske.length; i++) {
                 lose+="<li>"+nizGreske[i]+"</li>";
            }
            lose+="</ul>";
			greske.innerHTML=lose;
    }
	
	
}
function proveraPrijava() {
	var reIme=/^[A-ZŽŠĐČĆ][a-zšđčćž]{2,11}$/;
    var rePrezime=/^([A-ZŽŠĐČĆ][a-zšđčćž]{2,15})(\s[A-ZŽŠĐČĆ][a-zšđčćž]{2,15})*$/;
	var prijavaIme=document.getElementById("prijavaIme");
	var prijavaPrezime=document.getElementById("prijavaPrezime");
	var porukaIme=document.getElementById("porukaIme");
	var porukaPrezime=document.getElementById("porukaPrezime");
	if(!reIme.test(prijavaIme.value)){
		porukaIme.innerHTML="Unesite ponovo ime";
		porukaIme.style.color="red";
	} else {
		porukaIme.innerHTML="Uneli ste dobro ime";
		porukaIme.style.color="green";
	}
	if(!rePrezime.test(prijavaPrezime.value)){
		porukaPrezime.innerHTML="Unesite ponovo prezime";
		porukaPrezime.style.color="red";
	} else {
		porukaPrezime.innerHTML="Uneli ste dobro prezime";
		porukaPrezime.style.color="green";
	}
}
window.onload = function () {
	var nav=document.getElementById("nav");
    nizNav.forEach(function (deo) {
        nav.innerHTML += `<li><a href="${deo.link}" class="link">${deo.tekst}</a></li> `;
    });
	var navK=document.getElementById("kolonaLinkMeni");
    nizNav.forEach(function (deo) {
        navK.innerHTML += `<li><a href="${deo.link}">${deo.tekst}</a></li> `;
    });
	document.getElementById("btnPrijava").addEventListener("click", proveraPrijava);
	var ikoniceFafa=document.getElementById("fafa");
	var x="";
    nizFaFa.forEach(function (deo) {
         x+= `<li><a href="${deo.link2}" target="_blank"><i class="${deo.fafa}"></i></a></li> `;
    });
	ikoniceFafa.innerHTML=x;
	
};
