
function funToday() {
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
    document.write(formatFirst);
    document.write('<br>');
}; 

setInterval(funToday, 1000);


function funTodayNewFormat() {
    let today = new Date();
    const todayNewFormat = ('0' + today.getDate()).slice(-2)+'.'+('0'+ (today.getMonth()+1)).slice(-2)+'.'+today.getFullYear()+' - '+ today.toLocaleTimeString();
    document.write(todayNewFormat);
    document.write('<br>');
};
setInterval(funTodayNewFormat,1000);