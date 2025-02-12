import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { setOpeningTime, setClosingTime, setReservationQuota, setIsNextDisabled } from '../../features/restaurantSlice';

function TimeQuotasView() {
    const { openingTime, closingTime, reservationQuota } = useSelector(state => state.restaurant);
    const dispatch = useDispatch();

    useEffect(() => {
        checkIsNextDisabled(openingTime, closingTime, reservationQuota);
    }, []);

    const handleOpeningTimeChange = (newOpeningTime) => {
        dispatch(setOpeningTime(newOpeningTime));
        checkIsNextDisabled(newOpeningTime, closingTime, reservationQuota);
    };

    const handleClosingTimeChange = (newClosingTime) => {
        dispatch(setClosingTime(newClosingTime));
        checkIsNextDisabled(openingTime, newClosingTime, reservationQuota);
    };

    const handleQuotaChange = (event) => {
        const newQuota = event.target.value;
        dispatch(setReservationQuota(newQuota));
        checkIsNextDisabled(openingTime, closingTime, newQuota);
    }

    const checkIsNextDisabled = (openingTime, closingTime, reservationQuota) => {
        if (!openingTime || !closingTime || !reservationQuota) {
            dispatch(setIsNextDisabled(true));
        } else {
            dispatch(setIsNextDisabled(false));
        }
    };

    return (
        <div className="timeQuotascontainer">

            <label className='timeQuotasLabel'>Opening Time</label>
            <TimePicker
                onChange={handleOpeningTimeChange}
                value={openingTime}
                format="HH:mm:ss"
            />
            <label className='timeQuotasLabel'>Closing Time</label>
            <TimePicker
                onChange={handleClosingTimeChange}
                value={closingTime}
                format="HH:mm:ss"
            />
            <label className='timeQuotasLabel'>Reservation Quotas</label>
            <input
                className='timeQuotasInput'
                type="number"
                name="reservationQuota"
                max="250"
                onChange={handleQuotaChange}
                value={reservationQuota}
            />
        </div>
    );
}

export default TimeQuotasView;
