import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LawyerSelector from './LawyerSelector';
import { fetchLawyerDetails } from '../redux/actions';
import { Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';

const LawyerBookingPage = () => {
  const dispatch = useDispatch();
  const selectedLawyer = useSelector((state) => state.Lawyer.selectedLawyer);
  const lawyerFound = useSelector((state) => state.Lawyer.currentLawyer);

  useEffect(() => {
    dispatch(fetchLawyerDetails(selectedLawyer));
  }, [selectedLawyer,dispatch]);

  return (
    <>
      <Typography my={3} variant="h4" align="center">
        Lawyer Appointment
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <LawyerSelector />
          </Paper>
        </Grid>
      </Grid>

      {selectedLawyer && lawyerFound && (
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
              <Typography variant="h6">{`Bookings for ${lawyerFound.name}`}</Typography>
              {lawyerFound.bookedAppointments && lawyerFound.bookedAppointments.length > 0 ? (
                <List>
                  {lawyerFound.bookedAppointments.map((appointment) => (
                    <ListItem key={appointment.appointmentId}>
                      <ListItemText primary={`Appointment Time: ${appointment.appointmentTime}`} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2" color="textSecondary">
                  No appointments booked for this lawyer.
                </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default LawyerBookingPage;
