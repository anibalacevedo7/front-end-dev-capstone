import saladimage from './images/icons_assets/greek salad.jpg'
import bruimage from './images/icons_assets/bruchetta.svg'
import dessertimage from './images/icons_assets/lemon dessert.jpg'
import basketicon from './images/icons_assets/Dish icon.svg'

function Specials(props) {
    return (
        <div className="Specials">
            <div className="Specialsaction">
                <h1 className = "Specialsheader">This weeks specials!</h1>
                <button className = "Specialsbutton">Online Menu</button>
            </div>
            <ul className='Specialslist'>
                <li className="Dishcard">
                    <img src={saladimage} alt="Greed Salad" className='Dishimage'></img>
                    <h1 className="Dishname">Greek salad</h1>
                    <p className="Dishprice">$12.99</p>
                    <p className="Dishdescription">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <button className="Dishaction">
                        <p> Order a delivery</p>
                        <img src={basketicon} alt="Delivery Icon" className="Deliveryicon"></img>
                    </button>
                </li>
                <li className="Dishcard">
                    <img src={bruimage} alt="Bruschetta" className='Dishimage'></img>
                    <h1 className="Dishname">Bruschetta</h1>
                    <p className="Dishprice">$5.99</p>
                    <p className="Dishdescription">Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <button className="Dishaction">
                        <p> Order a delivery</p>
                        <img src={basketicon} alt="Delivery Icon" className="Deliveryicon"></img>
                    </button>
                </li>
                <li className="Dishcard">
                    <img src={dessertimage} alt="Lemon Dessert" className='Dishimage'></img>
                    <h1 className="Dishname">Lemon Dessert</h1>
                    <p className="Dishprice">$5.00</p>
                    <p className="Dishdescription">This comes straigth from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <button className="Dishaction">
                        <p> Order a delivery</p>
                        <img src={basketicon} alt="Delivery Icon" className="Deliveryicon"></img>
                    </button>
                </li>
            </ul>
        </div>    
    )
};

export default Specials;