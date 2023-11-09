
const isAvailableNextMonth = (availability) => {
  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(today.getMonth() + 2); // Set to the first day of the month after next month

  const apartmentAvailability = new Date(availability);
  return apartmentAvailability >= nextMonth;
};

const isAvailableNextWeek = (availability) => {
  const today = new Date();
  const nextWeekDate = new Date(today);
  nextWeekDate.setDate(today.getDate() + 7);
  const apartmentAvailability = new Date(availability);

  return apartmentAvailability >= nextWeekDate;
};


export { isAvailableNextMonth, isAvailableNextWeek };