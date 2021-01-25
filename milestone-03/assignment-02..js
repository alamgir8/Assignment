function kilometerToMeter(numOfKilo){
    if(typeof numOfKilo == "number"){
    var kiloMeter = 1000; // 1 km = 1000m
    if (numOfKilo<0){
    return "Kilometer should be at least 0.";
    } else{
    return numOfKilo * kiloMeter; 
    }
    }
    return "Sorry! Only numbers are allowed here.";
   }
   function budgetCalculator(watch, phone, laptop){
    if(typeof watch == "number" && typeof phone == "number" && typeof laptop == "number" && (watch - Math.floor(watch) == 0) && (phone - Math.floor(phone) == 0) && (laptop - Math.floor(laptop) == 0)){ // checking whether input value contains non numbers or floating value
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var budget= watch * watchPrice + phone * phonePrice + laptop * laptopPrice;
    if(watch<0 || phone <0 || laptop<0){
    return "All the parameter should be greater than 0.";
    }
    return budget;  
    }
    return "Your input is invalid; plz input 3 integer numbers only.";
   }
   function hotelCost(numOfDaysToStay){// first 10 days 100tk, from 11-20 days 80 tk, from 21 days 50 tk
    if((typeof numOfDaysToStay == "number") && (numOfDaysToStay - Math.floor(numOfDaysToStay) == 0)){
    var billFirstTenDays = 100;
    var billSecondTenDays = 80;
    var billAfterTwentyDays = 50;
    var daysAfterTwenty =  Math.max(numOfDaysToStay-20,0);
    var daysAfterTen = Math.max(0,Math.min(20,numOfDaysToStay)-10);
    var daysFirstTen = Math.min(numOfDaysToStay,10);
    var totalBill = daysFirstTen*billFirstTenDays + daysAfterTen*billSecondTenDays + daysAfterTwenty*billAfterTwentyDays;
    if(numOfDaysToStay<1){
    return "Days should be at least 1.";
    }
    return totalBill;
    }
    return "Your input is invalid; Only integer & positive number of days are valid here."; 
   }
   function megaFriend(listOfFreind){
    if(Array.isArray(listOfFreind) && listOfFreind.length >0){ //checking wheter the array of list of friends is array or not.
    var lengthOfEachFriend = [];
    for(var i =0; i<listOfFreind.length;i++){
    if(typeof listOfFreind[i] != "string"){ //checking wheter array contains names or not.
    return "Your array contains invalid name[s]. Plz correct and try again.";
    }
    lengthOfEachFriend.push(listOfFreind[i].length);
    }
    var lengthOffriendWithLongName = Math.max.apply(Math, lengthOfEachFriend);
    var friendWithLongNameIndex = lengthOfEachFriend.indexOf(lengthOffriendWithLongName);
    var friendWithLongName = listOfFreind[friendWithLongNameIndex];
    return friendWithLongName; 
    }
    return "Plz include only friend List. Number/Empty list is not valid here.";
   }
   