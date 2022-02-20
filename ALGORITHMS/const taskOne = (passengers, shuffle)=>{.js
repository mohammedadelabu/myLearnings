const taskOne = (passengers, shuffle)=>{
    let count = 0;
    let boarded = [];
    let reservation = [];
    let locations = ['Abuja', 'Benue', 'Lagos', 'Katsina', 'Sambisa']

    for(let i = 0; i <= passengers; i++){
        if (passengers.length > 50) {
            reservation.push(passengers.length)
        } else {
            boarded.push(passengers.length)
            console.log(boarded);

        }
    }






    return {
        boarded:[],
        reservation:[],
        count:0
    } 
}
console.log(taskOne(10, 4));