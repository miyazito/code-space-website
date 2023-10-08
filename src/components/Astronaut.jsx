export const Astronaut = (props) => {

    return (
        <div className={`astrounaut astronaut-${props.id}`}>
            <img src={props.src}/>
            <div className="word-balloon">
                <p>{props.text}</p>
            </div>
        </div>
    )
}