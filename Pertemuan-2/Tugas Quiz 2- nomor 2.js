 var fileSystem = require('fs');
 var temp = [];
 function bacaCSV(fs){
     var dataCSV = fileSystem.readFileSync('./data.csv','utf8');
     var splitDataCSV = dataCSV.split('\r\n');
     
     var array = [];
     for(var i=0; i<splitDataCSV.length; i++){
        array.push(splitDataCSV[i].split(' '))
        return array;
    }

 }
 console.log(bacaCSV());