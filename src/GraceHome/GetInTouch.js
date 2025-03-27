import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./GetInTouch.css";
import MapWithMarker from "./MapWithMarker";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineFax } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        howDidYouFindUs: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.howDidYouFindUs || !formData.message) {
            toast.error("All fields are required. Please fill out the form completely.");
            return;
        }
        setLoading(true);
        emailjs
            .send(
                "service_qofsl3q",
                "template_l4sgjv6",
                formData,
                "JjTbXkTViiYETYYtL"
            )
            .then(
                (result) => {
                    console.log("Email successfully sent!", result.text);
                    toast.success("Thank you for connecting with us. We will connect with you shortly 😊");
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                        howDidYouFindUs: "",
                    });
                    setLoading(false);
                },
                (error) => {
                    console.error("Error sending email:", error);
                    toast.error("Somethings not right, kindly try again ☹️");
                    setLoading(false);
                }
            );
    };

    return (
        <section className="get_in_touch_section" id="contact">
            <div className="container">
                <div className="row round">
                    <div className="col-md-6">
                        <div className="form_div">
                            <h2>Get In <span>Touch</span></h2>
                            <p>Got something on your mind? Fill out the form below, and we’ll get back to you faster than you can say ‘Hello!’ 🚀📬</p>
                            <form id="grace_form" onSubmit={handleSubmit}>
                                <div>
                                    {/* <label>Name:</label> */}
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        placeholder="Name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    {/* <label>Email:</label> */}
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        placeholder="Email"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    {/* <label>Phone:</label> */}
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        placeholder="Phone Number"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        placeholder="Message"
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    {/* <label>How did you find us?</label> */}
                                    <select
                                        name="howDidYouFindUs"
                                        value={formData.howDidYouFindUs}
                                        onChange={handleChange}
                                        id="grace_form_select"
                                        required
                                    >
                                        <option value="" disabled>
                                            The service you interested in?
                                        </option>
                                        <option value="Grace Associates">Grace Associates</option>
                                        <option value="Grace Paper Bags">Grace Paper Bags</option>
                                        <option value="Euro Clean Tech">Euro Clean Tech</option>
                                    </select>
                                </div>
                                <button type="submit">Send</button>
                            </form>
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="icon_div">
                                        <FiPhoneCall />
                                        <div className="icon_sub_div">
                                            <p>Phone</p>
                                            <span>+91 96552 14330</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="icon_div">
                                        <FaEnvelopeOpenText />
                                        <div className="icon_sub_div">
                                            <p>Email</p>
                                            <span mailto="graceassociates2009@gmail.com">graceassociates2009@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="map_div">
                            <MapWithMarker />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default GetInTouch;