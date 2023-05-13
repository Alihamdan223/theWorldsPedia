import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

const TheFlags = ({dispatch, name, official, svg, discription}) => {

    return (
    <div className="TheFlags wrapper">
        <div className="theFlags-title">
            <h1>{name}</h1>
            <h4>{official}</h4>
        </div>
        <div className="Flags-info">
            <div>
            <FaArrowLeft onClick={() => dispatch({ type: "Previous"})} />
            </div>
            <img src={svg} alt="A Flag" draggable="false" />
            <div>
            <FaArrowRight onClick={() => dispatch({type: "Next"})} />
            </div>
        </div>
        <div className="flags-discription">
            <p>{discription ? discription : "No Discription"}</p>
        </div>
    </div>
    )
}

export default TheFlags;