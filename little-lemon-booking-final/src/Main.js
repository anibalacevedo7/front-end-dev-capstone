import BookingPage from "./BookingPage";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import { Element } from "react-scroll";

function Main(){
    return(
        <main className='Main'>
            <Element name="call-to-action-section" className="section">
                <CallToAction/>
            </Element>
            <Element name="specials-section" className="section">
                <Specials/>
            </Element>
            <Element name="booking-section" className="section">
                <BookingPage/>
            </Element>
        </main>
    )
}

export default Main;