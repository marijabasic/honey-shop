
var nizNav = [
	{ link:"index.html", tekst: "Početna"},
	{ link:"index.html", tekst: "Proizvodi"},
	{ link:"galerija.html", tekst: "Galerija"},
	{ link:"autor.html", tekst: "O autoru"}
];
var nizVrsteMeda = [
	{ value: "B", vrsta: "Bagremov" },
	{ value: "LI", vrsta: "Livadski" },
	{ value: "LV", vrsta: "Lipov" },
	{ value: "C", vrsta: "Cvetni" },
	{ value: "R", vrsta: "Repišin" },
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
	{ velika: "images/med10.jpg", mala: "images/med100.jpg", alt: "med i kašika", opis: "Med i kašika" }
];



window.onload = function () {
	var nav=document.getElementById("nav");
    nizNav.forEach(function (deo) {
        nav.innerHTML += `<li><a href="${deo.link}">${deo.tekst}</a></li> `;
    });
	var navK=document.getElementById("kolonaLinkMeni");
    nizNav.forEach(function (deo) {
        navK.innerHTML += `<li><a href="${deo.link}">${deo.tekst}</a></li> `;
    });
	var ikoniceFafa=document.getElementById("fafa");
	var x="";
    nizFaFa.forEach(function (deo) {
         x+= `<li><a href="${deo.link2}" target="_blank"><i class="${deo.fafa}"></i></a></li> `;
    });
	ikoniceFafa.innerHTML=x;
	var galerija=document.getElementById("galerija");
	for(var i=0; i<nizGalerija.length; i++) {
	galerija.innerHTML+=`<div class="slikaDiv"><a href="${nizGalerija[i].velika}" data-lightbox="ourgallery" data-title="${nizGalerija[i].opis}"><img src="${nizGalerija[i].mala}" alt="${nizGalerija[i].alt}"/></a></div>`;
	}
};
