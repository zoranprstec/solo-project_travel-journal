import pin from '../images/pin.png'

export default function Card(props) {
    console.log(props)
    return (
        <div className="card--all">
            <section className="card">
                <div className="card-img">
                    {props.items.imagePath}
                </div>
                <div className="card-details">
                    <div className="card-location">
                        <img src={pin} alt="pin-image" />
                        <p>{props.items.location}</p>
                        <a href={props.items.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.items.title}</h1>
                    {props.items.endDate ? 
                        (<h4>{props.items.startDate} - {props.items.endDate}</h4>) : (<h4>{props.items.startDate}</h4>)}
                    <p>{props.items.description}</p>
                </div>
            </section>
            <div className='crta' />
        </div>
    )
}