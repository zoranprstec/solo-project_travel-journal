import pin from '../images/pin.png'

export default function Card(props) {
    console.log(props)
    return (
        <section>
            {props.items.imagePath}
            <div>
                <img src={pin} alt="pin-image" />
                <p>{props.items.location}</p>
                <a href={props.items.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>{props.items.title}</h1>
            {props.items.endDate ? 
                (<h4>{props.items.startDate} - {props.items.endDate}</h4>) : (<h4>{props.items.startDate}</h4>)}
            <p>{props.items.description}</p>
            <hr />
        </section>
    )
}