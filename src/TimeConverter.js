export function TimeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    const ampmHour = () => {
        if (hour > 12) {
            return hour - 12;
        } else {
            return hour;
        }
    }
    var min = a.getMinutes();
    const ampmMinutes = () => {
        if (min === 0 || min === '0') {
            return ''
        } else {
            return min
        }
    }
    const ampm = () => {
        if (hour > 12) {
            return 'PM'
        } else {
            return 'AM'
        }
    }
    var time = month + ' ' + date + ' ' + year + ' ' + ampmHour() + ':' + ampmMinutes() + ampm();
    return time;
}
