import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLawyer } from '../redux/actions';
import { MenuItem, TextField } from '@mui/material';

const LawyerSelector = () => {
  const dispatch = useDispatch();
  const selectedSpecialty = useSelector((state) => state.Lawyer.selectedSpecialty);
  const lawyers = useSelector((state) =>
    state.Lawyer.lawyers.filter((lawyer) => selectedSpecialty? lawyer.specialty === selectedSpecialty:true)
  );
  const selectedLawyer = useSelector((state) => state.Lawyer.selectedLawyer);

  const handleLawyerSelect = (lawyerId) => {
    dispatch(selectLawyer(lawyerId));
  };

  return (
    <div className='m-3'>
      <TextField
        select
        label="Select a Lawyer"
        variant="outlined"
        onChange={(e) => handleLawyerSelect(e.target.value)}
        value={selectedLawyer}
        fullWidth 
      >
         
        {lawyers.map((lawyer) => (
          <MenuItem key={lawyer.id} value={lawyer.id}>
            {lawyer.name} | Rs. {lawyer.costPerAppoinment}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default LawyerSelector;
