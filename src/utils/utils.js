
const isAvailableNextMonth = (availability) => {
 // include apartments available even if its not during the full month
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setMonth(today.getMonth() + 1);

    const apartmentAvailability = new Date(availability);

    return apartmentAvailability >= nextMonth;

  };

const isAvailableNextWeek = (availability) => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    const apartmentAvailability = new Date(availability);
  
    return apartmentAvailability >= nextWeek;
  }

export { isAvailableNextMonth, isAvailableNextWeek };