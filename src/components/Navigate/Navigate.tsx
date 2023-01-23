import { useNavigate } from "react-router-dom";
import "./Navigate.css"
import arrow from './assets/arrow-left-nav.svg'

export const Navigate = () => {
    const navigate = useNavigate();
    return (
        <div className="navigator" onClick={() => navigate(-1)}>
            <img src={arrow} />
            <a className="navigator-link">Back</a>
        </div>
    )
}