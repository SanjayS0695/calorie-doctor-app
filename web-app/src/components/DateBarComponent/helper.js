export const getDaysOfTheWeek = (startingDate) => {
    const days = [];
    days.push({
        currentDate: startingDate.format(),
        date: startingDate.format('D'),
        day: startingDate.format('dddd').charAt(0),
    });
    for (var i = 0; i < 6; i++) {
        const date = startingDate.add(1, 'days');
        days.push({
            currentDate: date.format(),
            date: date.format('D'),
            day: date.format('dddd').charAt(0),
        });
    }
    return days;
};
