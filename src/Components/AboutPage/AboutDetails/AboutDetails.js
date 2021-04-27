import React from 'react';
import { Table } from 'react-bootstrap';
import image from './../../../image/logo3.jpg'

const aboutDetails = [
    { title: "Fill Name", data: "Md Anamul Hoque" },
    { title: "Age", data: 18 },
    { title: "Nationality", data: "Bangladeshi" },
    { title: "Language", data: "Bangla, English" },
    { title: "Address", data: "Sundarjong, Gaibandha, Bamgladesh" }
]

const AboutDetails = () => {
    return (
        <section className="d-md-flex mt-4">
            <div className="w-100">
                <img src={image} alt="Image" className="w-100 height-100 rounded" />
            </div>
            <div className="pl-md-5">
                <h3 className="text-white">
                    I am <span className="custom-blue-color">Anamul Hoque</span>
                </h3>
                <p className="muted-text-color custom-font-weight-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                    delectus libero incidunt nisi ad pariatur excepturi in, ab magni
                    repudiandae atque eveniet.
                </p>

                <Table>
                    <tbody className='muted-text-color custom-font-weight-600'>
                        {
                            aboutDetails.map(aboutDetail => <tr key={aboutDetail.title}>
                                <td className="border-0 pb-1 p-0">{aboutDetail.title}</td>
                                <td className="border-0 pb-0"><span className="mr-3">:</span>{aboutDetail.data}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
                <button className="btn btn-primary">Download CV</button>
            </div>
        </section>
    );
};

export default AboutDetails;