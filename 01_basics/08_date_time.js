let sysDateTimestamp = new Date()
console.log(sysDateTimestamp)

//list of methods

//1)getHour()
let hh24=sysDateTimestamp.getHours()
console.log(hh24)
//2)getMinutes()
let min=sysDateTimestamp.getMinutes()
console.log(min)
//3)getSecond()
let sec=sysDateTimestamp.getSeconds()
console.log(sec)
//am or pm

let amOrPm;
if(hh24>=13 && hh24<=24)
{
    amOrPm='PM'
}
else
{
    amOrPm='AM'
}
console.log(amOrPm)


//using switch

// switch(amOrPm)
// {
//     case hh24>=13 && hh24<=24 : amOrPm='AM'
// default: amOrPm='PM'
// }
// console.log(amOrPm)


var exactTime=`${hh24}:${min}:${sec} ${amOrPm}`
console.log(exactTime)

