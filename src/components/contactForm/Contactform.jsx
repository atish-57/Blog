"use client";
import styles from "./contactform.module.css";
import { useFormState } from "react-dom";
import { contactinfo } from "@/lib/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

const Contactform = () => {
    const [state, formAction] = useFormState(contactinfo, undefined);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    useEffect(() => {
        if (state?.success) {
            toast.success("Message sent successfully!");
            setFormData({ name: '', email: '', phone: '', message: '' });
        }
    }, [state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <form action={formAction} className={styles.form}>
                <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} required />
                <input type="text" placeholder="Phone Number (Optional)" name="phone" value={formData.phone} onChange={handleChange} />
                <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default Contactform;
