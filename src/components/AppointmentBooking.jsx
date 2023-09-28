import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookAppointment, resetLawyerSelection } from '../redux/actions';
import SpecialtySelector from './SpecialtySelector';
import LawyerSelector from './LawyerSelector';
import TimeSlotSelector from './TimeSlotSelector';
import { Box, Button, Card, CardContent, Typography, Snackbar, Container } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const AppointmentBooking = () => {
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const dispatch = useDispatch();
  const selectedSpecialty = useSelector((state) => state.Lawyer.selectedSpecialty);
  const selectedLawyer = useSelector((state) => state.Lawyer.selectedLawyer);
  const selectedTimeSlot = useSelector((state) => state.Lawyer.selectedTimeSlot);

  const handleBookAppointment = () => {
    dispatch(bookAppointment());
    setSnackbarOpen(true); 
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  useEffect(() => {
    return () => {
      dispatch(resetLawyerSelection());
    };
  }, [dispatch]);

  return (
    <Container  sx={{ paddingTop: 2 }} maxWidth="md">
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" component="div" align="center" gutterBottom>
          Appointment Booking Form
        </Typography>
        <SpecialtySelector />
        {selectedSpecialty && (
          <Box mt={4}>
            <LawyerSelector />
          </Box>
        )}
        {selectedLawyer && (
          <Box mt={4}>
            <TimeSlotSelector />
          </Box>
        )}
        {selectedTimeSlot && (
          <Box mt={4} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleBookAppointment}
              disabled={!selectedLawyer}
            >
              Book Appointment
            </Button>
          </Box>
        )}
      </CardContent>

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
        >
          Appointment booked successfully!
        </MuiAlert>
      </Snackbar>
    </Card>
    </Container>
  );
};

export default AppointmentBooking;
