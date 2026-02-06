// let Dates =new Date()
// console.log(Dates);
// console.log(Dates.toString());
// console.log(Dates.toDateString());
// console.log(Dates.toLocaleString());
// console.log(typeof Dates);

let myDate = new Date("05-02-2026")
// console.log(myDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('defult',{
    weekday: "long"
})