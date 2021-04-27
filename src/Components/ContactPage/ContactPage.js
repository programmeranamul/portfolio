import React from 'react';
import Title from '../ShearedComponent/Title/Title';
import ContactInfo from './ContactInfo/ContactInfo';
import GetInTouch from './GetInTouch/GetInTouch';
import Map from './Map/Map';

const ContactPage = () => {
    return (
        <section className="pr-5 py-5 padding-left-85">
            <Title title={"Contact Us"} />
            <article className="p-3 bg-white font-weight-bold mt-3 rounded">
                <ContactInfo />
            </article>
            <article>
                <div className="row">
                    <div className="col-sm-7 mt-5 d-flex">
                        <GetInTouch />
                    </div>
                    <div className="col-sm-5 mt-5 d-flex">
                        <Map />
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ContactPage;