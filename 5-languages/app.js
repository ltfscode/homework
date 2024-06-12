const lang = prompt("Выберите язык: ru, en, de, fr, it");

switch (lang) {
  case "ru":
    console.log("Добрый день!");
    break;
  case "en":
    console.log("Good afternoon!");
    break;
  case "de":
    console.log("Guten Tag!");
    break;
  case "fr":
    console.log("Bon après-midi!");
    break;
  case "it":
    console.log("Buon pomeriggio!");
    break;
}
