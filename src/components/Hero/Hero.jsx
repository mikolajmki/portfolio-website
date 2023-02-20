import React from "react";
import css from './Hero.module.scss';
import {motion} from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import { toast, Toaster } from "react-hot-toast";

export const Hero = () => {
    const email = "mikol4m@gmail.com";

    const emailHandler = () => {
        navigator.clipboard.writeText(email);
        toast.success('E-mail address copied to clipboard!', {
            id: 'copy'
        });
    }

    return (
        <section className={`paddings ${css.wrapper}`}>
            <Toaster position="top-center"/>
            <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`innerWidth ${css.container}`}>
                <div className={css.upperElements}>
                    <motion.span 
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className="primaryText">Hey there, <br />I'm Mikolaj. <br /></motion.span>
                    <motion.span
                    variants={fadeIn('left', 'tween', 0.4, 1)}
                    className="secondaryText">
                        I build web apps <br />
                        and enjoy it a lot.
                    </motion.span>
                </div>

                <motion.div 
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className={css.person}>
                    <motion.img 
                    variants={slideIn('up', 'tween', 0.5, 1.3)}
                    src="./person.png" alt="" />
                </motion.div>

                <motion.div 
                variants={fadeIn('right', 'tween', 0.4, 1.5)}
                className={css.email}>
                    <a onClick={emailHandler}>{email}</a>
                </motion.div>

                <div className={css.lowerElements}>
                    <motion.div 
                    variants={fadeIn('right', 'tween', 0.3, 1)}
                    className={css.experience}>
                        <div className="primaryText">10</div>
                        <div className="secondaryText">
                            <div>Years</div>
                            <div>Experience</div>
                        </div>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn('left', 'tween', 0.5, 1)}
                    className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>CERTIFIED PROFESSIONAL</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}