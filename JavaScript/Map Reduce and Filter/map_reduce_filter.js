// Map Example
 var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var newNumberArray = numberArray.map(function(element) 
 {    return element + 10;});
 return newNumberArray;
 
 
 // Filter 
 var data = [  {    country: 'China',    population: 1409517397,  }, 
            {    country: 'India',    population: 1339180127,  },  
            {    country: 'USA',    population: 324459463,  },  
            {    country: 'Indonesia',    population: 263991379,  }]
  var cities = data.filter(val => {  return val.population > 500000000;});
  
 // Reduce 
  var numbers = [5, 10, 15, 20, 25, 30]; 
  var sum = numbers.reduce(function(total, amount){
        return total + amount});
return sum