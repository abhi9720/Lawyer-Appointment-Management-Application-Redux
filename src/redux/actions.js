export const selectSpecialty = (specialty) => ({
  type: 'SELECT_SPECIALTY',
  payload: specialty,
});

export const selectLawyer = (lawyerId) => ({
  type: 'SELECT_LAWYER',
  payload: lawyerId,
});

export const selectTimeSlot = (timeSlot) => ({
  type: 'SELECT_TIME_SLOT',
  payload: timeSlot,
});

export const bookAppointment = () => ({
  type: 'BOOK_APPOINTMENT',
});

export const resetLawyerSelection = () => ({
  type: 'RESET_SELECTIONS',
});

export const fetchLawyerDetails = (lawyerId) => ({
  type: 'FIND_LAWYER',
  payload: lawyerId,
});


