import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTimeSlot } from '../redux/actions';  
import { MenuItem, TextField } from '@mui/material';

const TimeSlotSelector = () => {
  const dispatch = useDispatch();
  const timeSlots = useSelector((state) => state.Lawyer.lawyers.find((lawyer) => {
    return lawyer.id === state.Lawyer.selectedLawyer
  })?.appointments.map((appointment) => appointment) || []);
  const selectedTimeSlot = useSelector((state) => state.Lawyer.selectedTimeSlot);
 
  const handleTimeSlotSelect = (timeSlot) => {
    dispatch(selectTimeSlot(timeSlot));
  };

  return (
    <div>
      <TextField
        select
        label="Select a Time Slot"
        variant="outlined"
        onChange={(e) => handleTimeSlotSelect(e.target.value)}
        value={selectedTimeSlot}
        fullWidth
      >

        {timeSlots.map((timeSlot) => (
          <MenuItem disabled={!timeSlot.isSlotAvailable} key={timeSlot.id} value={timeSlot.time}>
            {timeSlot.time}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default TimeSlotSelector;
