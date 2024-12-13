//car speed limit chack
//upto 70 km/h is okay
//next every 5km it gives 1 point
// if the point is above 12 licance should be suspanded

function Car(speed){
    const SpeedLimit = 70;
    if(speed<=SpeedLimit){
        return "Ok";
    }
    else{
     const  Points = Math.floor((speed-SpeedLimit)/5);
    if(Points >= 12){
        console.log("Suspanded");
    }
    else 
    console.log(Points);
    }
}

const demo = Car(100);
console.log(Car);

