import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Callender = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
           <DayPicker />
            </div>
        </div>
    );
};

export default Callender;