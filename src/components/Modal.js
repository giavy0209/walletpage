import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
export default function Modal({title, isVisible, children, onCancel}){
    console.log(isVisible);
    return (
        <>
        <div onClick={onCancel} className={`mask ${isVisible && 'show'}`}>

        </div>
        <div className={`model ${isVisible && 'show'}`}>
            {title && <div className="header">
                <p className="title">{title && title}</p>
                <span className="close-btn" onClick={onCancel}><FontAwesomeIcon icon={faTimes}/></span>
            </div>}
            <div className="body">
                {children}
            </div>
        </div>
        </>
    )
}