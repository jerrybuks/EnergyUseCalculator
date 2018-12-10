'use strict';



var calcEnergy = function (e) {

    var DOMstrings = {

        wattage: '#wattage',
        numHours: '#numHours',
        amount: '#amount',
        dailyConsume: '#daily-consume',
        monthlyConsume: '#monthly-consume',
        yearlyConsume: '#yearly-consume',
        currency: '.currency',

    };

     var watt, hours, amountPerKWH,wattsPerDay, KWperDay, KWMonth, dailyCon, monthlyCon, yearlyCon, currency;
    
        watt = document.querySelector(DOMstrings.wattage).value;
       hours = document.querySelector(DOMstrings.numHours).value;
       amountPerKWH = document.querySelector(DOMstrings.amount).value;
       currency = document.querySelector(DOMstrings.currency).value;

    //calculates watts per Day
     wattsPerDay = watt * hours;

     //converts to kilowatts 
     KWperDay = wattsPerDay/1000;

     
     //daily COnsumption 
     dailyCon  = (KWperDay * amountPerKWH).toFixed(4);

     //monthly Consumptionn based on amount paid per KWH
     monthlyCon =  dailyCon * 30;

    //yearly Consumption
    yearlyCon = monthlyCon * 12;

    document.querySelector(DOMstrings.dailyConsume).value = currency + dailyCon;
    document.querySelector(DOMstrings.monthlyConsume).value = currency + monthlyCon;
    document.querySelector(DOMstrings.yearlyConsume).value = currency + yearlyCon;

    e.preventDefault();
    
};




document.getElementById('calculate').addEventListener('click', calcEnergy);



    

