import BookingForm from './BookingForm';

function BookingPage(props){
    return(
        <div>
            <div className='Bookingpage'>
                <h1 className='Bookingheader'>Book a table</h1>
                <BookingForm data={props.data} />
            </div>
        </div>
    )
    }
    
    export default BookingPage;