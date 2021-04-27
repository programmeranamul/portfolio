import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelopeOpen,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
    return (
        <>
            <h4 className="">Anamul.Com</h4>
            <div className="d-md-flex justify-content-between align-items-center pr-3 pb-2">
                <div>
                    <p className="mb-2">
                        <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
              Sicha, Chandipur
            </p>
                    <p className="mb-2">Sundarjong, Gaibandha</p>
                </div>
                <div>
                    <p className="mb-0">
                        <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              01309423215
            </p>
                    <p className="mb-0">
                        <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2" />
              programmer.anamul@gmail.com
            </p>
                </div>
                <div className="d-none d-md-block">
                    <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="location-big-icon"
                    />
                </div>
            </div>
        </>
    );
};

export default ContactInfo;