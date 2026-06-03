import './card.css'

function Card(props) {

    return (
        <>
            <div className='card'> 
                <h3>Name: {props.name}</h3>
                <h3>Course: {props.course}</h3>
                <h3>Year: {props.year}</h3>
            </div>
        </>
    )
}

export default Card;