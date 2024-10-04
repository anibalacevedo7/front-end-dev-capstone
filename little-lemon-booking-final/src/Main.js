import BookingPage from "./BookingPage";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import { Element } from "react-scroll";
import { useReducer } from "react";


const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() >= 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

function Main(){

    const updateTimes = (availableTimes, action) => {
        availableTimes.date = action.date;
        availableTimes.times = fetchAPI(new Date(availableTimes.date));
        return(availableTimes);
    }
    
    const initializeTimes = {
        times: fetchAPI(new Date('2024-10-04')),
        date: '2024-10-04'
    };
    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes);
    return(
        <main className='Main'>
            <Element name="call-to-action-section" className="section">
                <CallToAction/>
            </Element>
            <Element name="specials-section" className="section">
                <Specials/>
            </Element>
            <Element name="booking-section" className="section">
                <BookingPage data={[availableTimes,dispatch]}/>
            </Element>
        </main>
    )
}

export default Main;