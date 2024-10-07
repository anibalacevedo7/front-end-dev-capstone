function ConfirmedBooking(props){
    return(
        <div>
            <h1 className="ConfirmHeader">Success! </h1>
            <h2 className="SubConfirmHeader"> {props.data[0]}, yout table is confirmed on {props.data[1]} at {props.data[2]} for {props.data[3]} guests.</h2>
        </div>
    )
}

export default ConfirmedBooking;