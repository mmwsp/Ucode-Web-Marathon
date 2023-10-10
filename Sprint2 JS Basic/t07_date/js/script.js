function getFormattedDate(dateObject)
{
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dateobj = dateObject.toISOString().slice(0, 10);
    let day = dateobj.slice(8);
    let month = dateobj.slice(5, 7);
    let year = dateobj.slice(0, 4);
    let time = dateObject.toTimeString();
    let num_day = dateObject.getDay();
    let name_day = days[num_day];
    return `${day}.${month}.${year} ${time.slice(0, 5)} ${name_day}`;
}

const date0= new Date(1993, 11, 1);
const date1= new Date(1998, 0, -33);
const date2= new Date('42 03:24:00');
console.log(getFormattedDate(date0));
console.log(getFormattedDate(date1));
console.log(getFormattedDate(date2));