import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import { Astronaut } from "../components/Astronaut";

import Contents from "../../content.json";

import "bootstrap/dist/css/bootstrap.min.css"

export const Content = (props) => {
    const [contentId, setContentId] = useState(0);
    const contents = [];

    Contents.map(content => {
        contents[content.id] = content
    })

    useEffect(() => {
        if (props.answerIsYes)
            setContentId(7);
    }, [props.answerIsYes]);

    const handlePrevious = () => {
        setContentId(contentId - 1);
    }

    const handleNext = () => {
        setContentId(contentId + 1);
    }

    return (
     
        <div className={`content content-${contentId}`}>
            {contents[contentId].title && <h2>{contents[contentId].title}</h2>}
            {contents[contentId].astronautText && <Astronaut id={contentId + 1} text={contents[contentId].astronautText}/>}
            {contents[contentId].text && <p>{contents[contentId].text}</p>}
            {contentId === contents.length - 1 && <Link to="/">The End</Link>}
    
            {((!props.answerIsYes && contentId > 0) || (props.answerIsYes && contentId > 7)) && <button className="btn btn-outline-light" onClick={handlePrevious}>Previous</button>}
            {contentId < contents.length - 1 && <button className="btn btn-outline-light" onClick={handleNext}>Next</button>}

        </div>
    )
}