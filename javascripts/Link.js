// Set the source paths for each pages
const SRC = {
  _LOGIN: "/login.html",
  _MAIN: "/main.html",
  _REGISTER: "/register.html",
  _ACCOUNTCREATION: "/accountCreation.html",
  _RECIPES: "/recipes.html",
  _SETTINGS: "/accountSettings.html",
  _LANDINGPAGE: "/landingPage.html",
};

const DATARECIPES = {
  _BISTEK: "/data/bistek.html",
  _BICOLEXPRESS: "/data/bicol-express.html",
  _BULALO: "/data/bulalo.html",
  _CALDERETA: "/data/caldereta.html",
  _CHICKENADOBO: "/data/chicken-adobo.html",
  _CHICKENTOCINO: "/data/chicken-tocino.html",
  _DINAKDAKAN: "/data/dinakdakan.html",
  _LIEMPO: "/data/liempo.html",
  _LONGGANISA: "/data/longganisa.html",
  _MORCON: "/data/morcon.html",
  _PININYAHANGBABOY: "/data/pininyahang-baboy.html",
  _SINIGANG: "/data/sinigang.html",
  _APALAYANGHIPON: "/data/ampalaya-hipon.html",
  _SHRIMPCOCONUTMILK: "/data/shrimp-coconutmilk.html",
  _SPANISHBANGUS: "/data/spanish-bangus.html",
  _AVOCADO: "/data/avocado.html",
  _BANANACUE: "/data/bananacue.html",
  _BIBINGKA: "/data/bibingka.html",
  _BUKOPANDAN: "/data/buko-pandan.html",
  _HALOHALO: "/data/halo-halo.html",
  _KAMOTECUE: "/data/kamote-cue.html",
  _LECHEFLAN: "/data/leche-flan.html",
  _MAJAJUBILEE: "/data/maja-jubilee.html",
  _MANGOGRAHAM: "/data/mango-graham.html",
  _PALITAW: "/data/palitaw.html",
  _PANCIT: "/data/pancit.html",
  _SAPINSAPIN: "/data/sapin-sapin.html",
  _SUMAN: "/data/suman.html",
};

// Set the initial text for the login button
var loginText = document.getElementById("login");
const REDIRECTLOGIN = document.getElementById("login");
const REDIRECTMAIN = document.getElementById("main");
const HOMELINK = document.getElementById("home");
const REDIRECTREGISTER = document.getElementById("register");
const ACCOUNTCREATION = document.getElementById("accountcreation");
const RECIPES = document.getElementById("recipes");
const ACCOUNTSETTINGS = document.getElementById("accountsettings");
const LANDINGPAGE = document.getElementById("landingpage");
//For the recipes
const BISTEK = document.getElementById("bistek");
const BICOLEXPRESS = document.getElementById("bicol-express");
const BULALO = document.getElementById("bulalo");
const CALDERETA = document.getElementById("caldereta");
const CHICKENADOBO = document.getElementById("chicken-adobo");
const CHICKENTOCINO = document.getElementById("chicken-tocino");
const DINAKDAKAN = document.getElementById("dinakdakan");
const LIEMPO = document.getElementById("liempo");
const LONGGANISA = document.getElementById("longganisa");
const MORCON = document.getElementById("morcon");
const PININYAHANGBABOY = document.getElementById("pininyahang-baboy");
const SINIGANG = document.getElementById("sinigang");
//SEAFOODS
const APALAYANGHIPON = document.getElementById("ampalayang-hipon");
const SHRIMPCOCONUTMILK = document.getElementById("shrimp-coconutmilk");
const SPANISHBANGUS = document.getElementById("spanish-bangus");
//DESSERTS
const AVOCADO = document.getElementById("avocado");
const BANANACUE = document.getElementById("bananacue");
const BIBINGKA = document.getElementById("bibingka");
const BUKOPANDAN = document.getElementById("buko-pandan");
const HALOHALO = document.getElementById("halo-halo");
const KAMOTECUE = document.getElementById("kamote-cue");
const LECHEFLAN = document.getElementById("leche-flan");
const MAJAJUBILEE = document.getElementById("maja-jubilee");
const MANGOGRAHAM = document.getElementById("mango-graham");
const PALITAW = document.getElementById("palitaw");
const PANCIT = document.getElementById("pancit");
const SAPINSAPIN = document.getElementById("sapin-sapin");
const SUMAN = document.getElementById("suman");

function redirectPages(pages) {
  //main pages
  switch (pages) {
    case "LOGIN":
      window.location.href = SRC._LOGIN;
      break;
    case "MAIN":
      window.location.href = SRC._MAIN;
      break;
    case "REGISTER":
      window.location.href = SRC._REGISTER;
      break;
    case "ACCOUNTCREATION":
      window.location.href = SRC._ACCOUNTCREATION;
      break;
    case "RECIPES":
      window.location.href = SRC._RECIPES;
      break;
    case "SETTINGS":
      window.location.href = SRC._SETTINGS;
      break;
    case "LANDINGPAGE":
      window.location.href = SRC._LANDINGPAGE;
      break;
    //
    //
    //for the recipes
    //
    //
    case "BISTEK":
      window.open(DATARECIPES._BISTEK, "_blank");
      break;
    case "BICOLEXPRESS":
      window.open(DATARECIPES._BICOLEXPRESS, "_blank");
      break;
    case "BULALO":
      window.open(DATARECIPES._BULALO, "_blank");
      break;
    case "CALDERETA":
      window.open(DATARECIPES._CALDERETA, "_blank");
      break;
    case "CHICKENADOBO":
      window.open(DATARECIPES._CHICKENADOBO, "_blank");
      break;
    case "CHICKENTOCINO":
      window.open(DATARECIPES._CHICKENTOCINO, "_blank");
      break;
    case "DINAKDAKAN":
      window.open(DATARECIPES._DINAKDAKAN, "_blank");
      break;
    case "LIEMPO":
      window.open(DATARECIPES._LIEMPO, "_blank");
      break;
    case "LONGGANISA":
      window.open(DATARECIPES._LONGGANISA, "_blank");
      break;
    case "MORCON":
      window.open(DATARECIPES._MORCON, "_blank");
      break;
    case "PININYAHANGBABOY":
      window.open(DATARECIPES._PININYAHANGBABOY, "_blank");
      break;
    case "SINIGANG":
      window.open(DATARECIPES._SINIGANG, "_blank");
      break;
    case "APALAYANGHIPON":
      window.open(DATARECIPES._APALAYANGHIPON, "_blank");
      break;
    case "SHRIMPCOCONUTMILK":
      window.open(DATARECIPES._SHRIMPCOCONUTMILK, "_blank");
      break;
    case "SPANISHBANGUS":
      window.open(DATARECIPES._SPANISHBANGUS, "_blank");
      break;
    // Desserts
    case "AVOCADO":
      window.open(DATARECIPES._AVOCADO, "_blank");
      break;
    case "BANANACUE":
      window.open(DATARECIPES._BANANACUE, "_blank");
      break;
    case "BIBINGKA":
      window.open(DATARECIPES._BIBINGKA, "_blank");
      break;
    case "BUKOPANDAN":
      window.open(DATARECIPES._BUKOPANDAN, "_blank");
      break;
    case "HALOHALO":
      window.open(DATARECIPES._HALOHALO, "_blank");
      break;
    case "KAMOTECUE":
      window.open(DATARECIPES._KAMOTECUE, "_blank");
      break;
    case "LECHEFLAN":
      window.open(DATARECIPES._LECHEFLAN, "_blank");
      break;
    case "MAJAJUBILEE":
      window.open(DATARECIPES._MAJAJUBILEE, "_blank");
      break;
    case "MANGOGRAHAM":
      window.open(DATARECIPES._MANGOGRAHAM, "_blank");
      break;
    case "PALITAW":
      window.open(DATARECIPES._PALITAW, "_blank");
      break;
    case "PANCIT":
      window.open(DATARECIPES._PANCIT, "_blank");
      break;
    case "SAPINSAPIN":
      window.open(DATARECIPES._SAPINSAPIN, "_blank");
      break;
    case "SUMAN":
      window.open(DATARECIPES._SUMAN, "_blank");
      break;

    default:
      break;
  }
}

loginText ? (REDIRECTLOGIN.innerText = "Login") : null;

REDIRECTLOGIN ? (REDIRECTLOGIN.onclick = () => redirectPages("LOGIN")) : null;
REDIRECTMAIN ? (REDIRECTMAIN.onclick = () => redirectPages("MAIN")) : null;
HOMELINK ? (HOMELINK.onclick = () => redirectPages("LANDINGPAGE")) : null;
REDIRECTREGISTER ? (REDIRECTREGISTER.onclick = () => redirectPages("REGISTER")) : null;
ACCOUNTCREATION ? (ACCOUNTCREATION.onclick = () => redirectPages("ACCOUNTCREATION")) : null;
RECIPES ? (RECIPES.onclick = () => redirectPages("RECIPES")) : null;
ACCOUNTSETTINGS ? (ACCOUNTSETTINGS.onclick = () => redirectPages("SETTINGS")) : null;
LANDINGPAGE ? (LANDINGPAGE.onclick = () => redirectPages("LANDINGPAGE")) : null;
// For the recipes pages
BISTEK ? (BISTEK.onclick = () => redirectPages("BISTEK")) : null;
BICOLEXPRESS ? (BICOLEXPRESS.onclick = () => redirectPages("BICOLEXPRESS")) : null;
BULALO ? (BULALO.onclick = () => redirectPages("BULALO")) : null;
CALDERETA ? (CALDERETA.onclick = () => redirectPages("CALDERETA")) : null;
CHICKENADOBO ? (CHICKENADOBO.onclick = () => redirectPages("CHICKENADOBO")) : null;
CHICKENTOCINO ? (CHICKENTOCINO.onclick = () => redirectPages("CHICKENTOCINO")) : null;
DINAKDAKAN ? (DINAKDAKAN.onclick = () => redirectPages("DINAKDAKAN")) : null;
LIEMPO ? (LIEMPO.onclick = () => redirectPages("LIEMPO")) : null;
LONGGANISA ? (LONGGANISA.onclick = () => redirectPages("LONGGANISA")) : null;
MORCON ? (MORCON.onclick = () => redirectPages("MORCON")) : null;
PININYAHANGBABOY ? (PININYAHANGBABOY.onclick = () => redirectPages("PININYAHANGBABOY")) : null;
SINIGANG ? (SINIGANG.onclick = () => redirectPages("SINIGANG")) : null;
//seafoods
APALAYANGHIPON ? (APALAYANGHIPON.onclick = () => redirectPages("APALAYANGHIPON")) : null;
SHRIMPCOCONUTMILK ? (SHRIMPCOCONUTMILK.onclick = () => redirectPages("SHRIMPCOCONUTMILK")) : null;
SPANISHBANGUS ? (SPANISHBANGUS.onclick = () => redirectPages("SPANISHBANGUS")) : null;
//desserts
AVOCADO ? (AVOCADO.onclick = () => redirectPages("AVOCADO")) : null;
BANANACUE ? (BANANACUE.onclick = () => redirectPages("BANANACUE")) : null;
BIBINGKA ? (BIBINGKA.onclick = () => redirectPages("BIBINGKA")) : null;
BUKOPANDAN ? (BUKOPANDAN.onclick = () => redirectPages("BUKOPANDAN")) : null;
HALOHALO ? (HALOHALO.onclick = () => redirectPages("HALOHALO")) : null;
KAMOTECUE ? (KAMOTECUE.onclick = () => redirectPages("KAMOTECUE")) : null;
LECHEFLAN ? (LECHEFLAN.onclick = () => redirectPages("LECHEFLAN")) : null;
MAJAJUBILEE ? (MAJAJUBILEE.onclick = () => redirectPages("MAJAJUBILEE")) : null;
MANGOGRAHAM ? (MANGOGRAHAM.onclick = () => redirectPages("MANGOGRAHAM")) : null;
PALITAW ? (PALITAW.onclick = () => redirectPages("PALITAW")) : null;
PANCIT ? (PANCIT.onclick = () => redirectPages("PANCIT")) : null;
SAPINSAPIN ? (SAPINSAPIN.onclick = () => redirectPages("SAPINSAPIN")) : null;
SUMAN ? (SUMAN.onclick = () => redirectPages("SUMAN")) : null;
