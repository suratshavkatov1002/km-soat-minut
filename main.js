var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input")
var elresult = document.querySelector(".result")
var elresult2 = document.querySelector(".result2")
var elresult3 = document.querySelector(".result3")
var elresult4 = document.querySelector(".result4")


var Piyoda = 3.6

var Velosiped = 20.1

var Mashina = 70

var Samolyot = 800

var minAylan = 60







var kmSoatMin = function(km){
    
    elInput.addEventListener("input", function(){

        km = elInput.value
        
        var elresultValueSoatPiyoda = Math.ceil(km / Piyoda )
        var elresultValueMinutPiyoda =Math.ceil(km / Piyoda * minAylan)
        
        elresult.innerHTML = `${elresultValueSoatPiyoda}soat  ${elresultValueMinutPiyoda}min `
        
        
        var elresultValueSoatVelosiped = Math.ceil (km / Velosiped)
        var elresultValueMinutVelosiped = Math.ceil (km / Velosiped * minAylan)

        elresult2.innerHTML = `${elresultValueSoatVelosiped}soat  ${elresultValueMinutVelosiped}min `


        var elresultValueSoatMashina = Math.ceil (km / Mashina)
        var elresultValueMinMashina = Math.ceil (km / Mashina * minAylan)

        elresult3.innerHTML = `${elresultValueSoatMashina}soat  ${elresultValueMinMashina}min `


        var elresultValueSoatSamolyot = Math.ceil (km / Samolyot)
        var elresultValueMinutSamolyot = Math.ceil (km / Samolyot * minAylan)

        elresult4.innerHTML = `${elresultValueSoatSamolyot}soat  ${elresultValueMinutSamolyot}min `
        
    })
}

kmSoatMin(elInput.value)











