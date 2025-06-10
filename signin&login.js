var uzivatelskyJmena = ["Lenka.Kolarova","Petr.Flaska","Jitka.Adamcova"]
var uzivatelskaHesla = ["DarujiKrev","RadaDaruji","MameRadiKrev"]
function registrace(){
   var novýJmeno = document.getElementById("noveJmeno").value
   uzivatelskyJmena.push(novýJmeno)
   var novyHeslo = document.getElementById("noveHeslo").value
   uzivatelskaHesla.push(novyHeslo)
}
function prihlaseni(uzivatelskyJmena, uzivatelskaHesla){
    var prihlaseniUzivatel = document.getElementById("prihlaseniJmeno").value
    var prihlaseniHesla = document.getElementById("prihlaseniHeslo").value
    for(i of uzivatelskyJmena) {
        if (prihlaseniUzivatel==uzivatelskyJmena[i]&&prihlaseniHesla==uzivatelskaHesla[i]){
            alert("přihlášeno")
        }
    }
        
}