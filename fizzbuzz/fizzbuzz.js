function fizzBuzz(number){
    for(var i =0; i < number; i++){
        if(number % 15 === 0){ console.log('fizzBuzz') }
        else if(number % 3 === 0){ console.log('fizz') }
        else if(number % 5 === 0){ console.log('buzz') }
        else{ console.log(i)}
    }


}

fizzBuzz(20);