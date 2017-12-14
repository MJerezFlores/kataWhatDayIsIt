function run(birthday_date) {

    var future_dates = "";

    var dayOfTheWeek = {5: 'Fri', 6: 'Sat', 0: 'Dom'};
    var date = parseInt(birthday_date.toString().substring(0, 2));
    var month = birthday_date.toString().substring(2, 5);

    var monthCode = calculateMonthCode(month);
    var leapCode = 0;

    for (var i = 2016; i < 2066; i++) {

        var yearCode = calculateYearCode(i - 2000);
        if (month == '01' || month == '02') {
            leapCode = calculateLeapCode(i);
        }
        summatoryResult = ((yearCode + monthCode + 6 + date + leapCode) % 7);

        if (dayOfTheWeek[summatoryResult] != null) {
            future_dates += dayOfTheWeek[summatoryResult] + "-" + i + " ";
        }
    }
    return future_dates;
}


function calculateYearCode(year) {
    result = year + (Math.floor(year / 4));
    return (result % 7);
}

function calculateMonthCode(month) {
    var codeMonths = {
        '01': 0,
        '02': 3,
        '03': 3,
        '04': 6,
        '05': 1,
        '06': 4,
        '07': 6,
        '08': 2,
        '09': 5,
        '10': 0,
        '11': 3,
        '12': 5
    };
    return codeMonths[month];
}

function calculateLeapCode(year) {
    if (year % 4 == 0) return -1;
    return 0;
}
