import React from "react";
import { Route, Routes } from 'react-router-dom'
import LawyerBookingPage from "./components/LawyerBookingPage";
import AppointmentBooking from "./components/AppointmentBooking";


const AppRoutes = () => {

    return (
        <Routes>
            <Route exact path="/view-booking" element={<LawyerBookingPage />} />
            <Route exact path="/" element={<AppointmentBooking />} />
        </Routes>
    )

}

export default AppRoutes;