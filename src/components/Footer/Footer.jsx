import React from "react";
import css from './Footer.module.scss';
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { toast, Toaster } from "react-hot-toast";

export const Footer = () => {
    const email = "mikol4m@gmail.com";

    const phoneHandler = () => {
        navigator.clipboard.writeText("+48883025755");
        toast.success('Phone number copied to clipboard!', {
            id: 'copy'
        });
    }

    const emailHandler = () => {
        navigator.clipboard.writeText(email);
        toast.success('E-mail address copied to clipboard!', {
            id: 'copy'
        });
    }

    return (
        <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>
            <Toaster position="top-center"/>
            <motion.div 
            variants={footerVariants}
            className={`flexCenter innerWidth yPaddings ${css.container}`}>

                <div className={css.left}>
                    <span className="primaryText">Let`s make something <br />amazing together! </span>
                    <span className="primaryText">Start by <a onClick={phoneHandler}>{email}</a></span>
                </div>

                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>145 New York, FL 5466, USA</p>
                    </div>

                    <div className={css.menu}>
                        <li><a href="#experties">Services</a></li>
                        <li><a href="#work">Experience</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#people">Testimonials</a></li>
                        <li onClick={phoneHandler}><a><p>+48 883025755</p></a></li>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}