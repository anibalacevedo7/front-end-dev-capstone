function ConfirmedBooking(props){
    return(
        <div>
            <h1 className="ConfirmHeader">Success! </h1>
            <h2 className="SubConfirmHeader"> Your table is confirmed on {props.data[0]} at {props.data[1]} for {props.data[2]} guests.</h2>
        </div>
    )
}

export default ConfirmedBooking;