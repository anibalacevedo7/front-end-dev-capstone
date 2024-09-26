import actionimage from './images/icons_assets/restauranfood.jpg'

function CallToAction(props) {
    return (
        <div className = "CallToAction">
            <div className = "CallToActionCard">
                <h1 className = "Header1">Little Lemon</h1>
                <h2 className = "Header2">Chicago</h2>
                <p className = "Actionmessage">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className = "Actionbutton">Reserve a Table</button>
            </div>
            <img src={actionimage} alt="Navigation logo" className='Actionimage'></img>
        </div>
    )
};

export default CallToAction;