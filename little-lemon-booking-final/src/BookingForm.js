import {useState} from 'react';
import ConfirmedBooking from './ConfirmedBooking';

const submitAPI = function(formData) {
    return true;
};

function BookingForm (props){

    const [ date, setDate] = useState('');
    const [ time, setTime] = useState('');
    const [ guests, setGuests] = useState('');
    const [ ocassion, setOcassion] = useState('');
    const [ disableSubmit, setDisableSubmit] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const BookingData = [date,time,guests,ocassion];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(submitAPI(BookingData));
    }

    const handleDateSelection = (e) => {
        const dateSelected = e.target.value;
        setDate(dateSelected);
        dispatch ({date: dateSelected});
    }

    const handleMouseOver = () => {
        if (date!=='' && time!=='' && guests!==''){
        setDisableSubmit(false);
        return;
        }
    }

    const [ availableTimes, dispatch]= [props.data[0],props.data[1]];

    return(
        
        <div>
            {!isSubmitted?(
                <form onSubmit={handleSubmit} className='Formfields'>
                    <label htmlFor='res-date' className='Formlabel'>Date </label>
                    <input 
                        id='res-date' 
                        className='Forminput' 
                        type='date' 
                        value={availableTimes.date} 
                        onChange = {handleDateSelection}
                        placeholder='Please select a date'
                    >
                    </input>
                    <label htmlFor='res-time' className='Formlabel'> Time </label>
                    <select id='res-time' className='Forminput' value={time} onChange = {e => setTime(e.target.value)}>
                        <option value="" disabled>Select an available time</option>
                        {availableTimes.times.map ((time,index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    <label htmlFor='res-guests' className='Formlabel'> Number of guests </label>
                    <input id='res-guests' className='Forminput' type="number" value={guests} placeholder='1-12' onChange = {e => setGuests(e.target.value)}></input>
                    <label htmlFor='res-ocassion' className='Formlabel'> Ocassion </label>
                    <select id='res-ocassion' className='Forminput' value={ocassion} onChange ={e => setOcassion(e.target.value)}>
                        <option value="">Please select ocassion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other ocassion</option>
                    </select>
                    <input className="Formbutton" type='submit' value='Make your reservation' disabled={disableSubmit} onMouseOver={handleMouseOver}></input>
                </form>):(
                <ConfirmedBooking data={BookingData}/>
            )}
        </div>
    )
    }
    
    export default BookingForm;