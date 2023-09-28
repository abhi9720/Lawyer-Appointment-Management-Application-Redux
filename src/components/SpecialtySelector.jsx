import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSpecialty } from '../redux/actions';
import { MenuItem, TextField } from '@mui/material';

const SpecialtySelector = () => {
    const dispatch = useDispatch();
    const specialties = useSelector((state) => {
        return state.Lawyer.specialties
    });
    const selectedSpecialty = useSelector((state) => state.Lawyer.selectedSpecialty);

    const handleSpecialtySelect = (specialty) => {
        dispatch(selectSpecialty(specialty));
    };

    return (
        <div>
            <TextField
                select
                label="Select a Specialty"
                variant="outlined"
                onChange={(e) => handleSpecialtySelect(e.target.value)}
                value={selectedSpecialty}
                fullWidth>

                {specialties?.map((specialty) => (
                    <MenuItem key={specialty} value={specialty}>
                        {specialty}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    );
};

export default SpecialtySelector;
