//Github link:  https://github.com/alamgir8/Assignment/tree/main/milestone-03



//Calculating kilometer to the meter by function


function kilometerToMeter(kilometer) {
    if (kilometer <= -1) {
        return 'distance cannot be negative';
    }
    var meter = kilometer * 1000; //as we know 1km = 1000m
    return meter;
}

console.log(kilometerToMeter(10));     //As a exmple for 10 kilometer;







// Budget calculation by function. (In this function, you can't use negative quantity for any items.)

function budgetCalculator(watch, mobile, laptop) {
    if (watch <= -1 || mobile <= -1 || laptop <= -1) {
        return "you can't inter negative quantity";
    }
    var watchPrice = 50 * watch;
    var mobilePrice = 100 * mobile;
    var laptopPrice = 500 * laptop;
    var totalBudget = watchPrice + mobilePrice +laptopPrice;

    return totalBudget;
}

console.log(budgetCalculator(5, 2, 1));      //As a exmple 5 watch, 2 mobile and 1 laptop.







//Hotel cost calculation by function

function hotelCost(day) {
    var hotelCost = 0;
    if (day <= -1) {
        return "you can't inter negative day for hotel cost";
        
    }
    if (day <= 10) {
        hotelCost = day * 100;
        
    }
        else if (day <= 20) {
            var tenDaysCost = 10 * 100;
            var remainingDay = day - 10;
            var tenToTwentyDaysCost = remainingDay * 80;
            hotelCost = tenDaysCost + tenToTwentyDaysCost;
        }
    else{
        var tenDaysCost = 10 * 100;
        var tenToTwentyDaysCost = 10 * 80;
        var remainingDay = day - 20;
        var twentyUpDaysCost = remainingDay * 50;
        hotelCost = tenDaysCost + tenToTwentyDaysCost + twentyUpDaysCost;
    }    
    return hotelCost;
}

console.log(hotelCost(-9));     //As a exmple of 9 days cost.







//Find out big friend name by function

function megaFriend(name) {
    var megaFriend = ' ';
    for (var i = 0; i < name.length; i++) {
       if (megaFriend.length < name[i].length ) {
           megaFriend = name[i];
       }  
    }

    return megaFriend;
}

console.log(megaFriend(['RaselMiyaRipon','Hanif', 'Aminul', 'Alamin', 'Salauddin', 'Sharfuddin']));     //As a exmple big friend name.
