
function funToday() {
    let myDiv = document.querySelector('div');
    let today = new Date();
    const week = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    const nameMonth =['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря',]; 
    let hour;
    if (today.getHours() > 1 && today.getHours() < 5) {
        hour = 'часа';
    } else if(today.getHours()>4 && today.getHours()<21 || today.getHours() == 0) {
        hour = 'часов';
    } else {
        hour = 'час';
    }
    let formatFirst = `Сегодня ${week[today.getDay()]}, ${today.getDate()} ${nameMonth[today.getMonth()]} ${today.getFullYear()} года, ${today.getHours()} ${hour} ${today.getMinutes()} минут ${today.getSeconds()} секунды`;

    myDiv.innerHTML = formatFirst;

};

setInterval(funToday, 1000);




function funTodayNewFormat() {
    let myDiv2 = document.querySelector('.div2');
    let today = new Date();
    const todayNewFormat = ('0' + today.getDate()).slice(-2)+'.'+('0'+ (today.getMonth()+1)).slice(-2)+'.'+today.getFullYear()+' - '+ today.toLocaleTimeString();
    myDiv2.innerHTML = todayNewFormat;
};
setInterval(funTodayNewFormat,1000);