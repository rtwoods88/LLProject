import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faBicycle } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
    return (
        <div className={`item-card d-flex flex-column overflow-hidden rounded-top-4 ${props.className ? props.className : '' }`}>
            <div className="item-img " style={{backgroundImage:`url(${props.background})`, backgroundPosition:'center',backgroundSize:'cover', height:'225px', overflow:'hidden'}}></div>
                <div className="d-flex flex-column px-3 pt-3 pb-3">
                <div className="item-header fw-medium d-flex justify-content-between">
                    <div className="item-title ">{props.title}</div>
                    <div className="item-price">{props.price}</div>
                </div>
                <div className="item-description pt-4">
                    {props.children}
                </div>
                <div className="fw-medium pb-3">
                    Order Now &nbsp;
                    <span><FontAwesomeIcon icon={faBicycle} /></span>
                </div>
                </div>
        </div>
    )
}

export default Card