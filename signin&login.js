var uzivatelskyJmena = ["Lenka.Kolarova","Petr.Flaska","Jitka.Adamcova"]
var uzivatelskaHesla = ["DarujiKrev","RadaDaruji","MameRadiKrev"]
function registrace(){
   var novýJmeno = document.getElementById("noveJmeno").value
   uzivatelskyJmena.push(novýJmeno)
   var novyHeslo = document.getElementById("noveHeslo").value
   uzivatelskaHesla.push(novyHeslo)
   alert("registrace proběhla úspěšně "+novýJmeno+" "+novyHeslo)
}
function prihlaseni(){
    console.log(uzivatelskaHesla)
    console.log(uzivatelskyJmena)
    var prihlaseniUzivatel = document.getElementById("prihlaseniJmeno").value
    var prihlaseniHesla = document.getElementById("prihlaseniHeslo").value

    for(var i = 0; i < uzivatelskyJmena.length; i++){ 
        if (prihlaseniUzivatel==uzivatelskyJmena[i]&&prihlaseniHesla==uzivatelskaHesla[i]){
            alert("přihlášeno")
        }
    }
        
}