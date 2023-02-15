import React from "react";
import css from './Experties.module.scss';
import { projectExperience, WhatDoIDo } from "../../utils/data";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

export const Experties = () => {
    return (
        <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>
            <div className={`yPaddings flexCenter innerWidth ${css.container}`}>
                 
                 <div className={css.leftSide}>
                    {projectExperience.map((exp, i) => {
                        return (
                            <motion.div 
                            key={i}
                            variants={fadeIn('right', 'tween', (i + 1) * 0.2, 1)}
                            className={css.exp}>
                                <div className="flexCenter" style={{ backgroundColor: exp.bg }}>
                                    <exp.icon size={25} color='white'/>
                                </div>
                                <div>
                                    <span>{exp.name}</span>
                                    <span className="secondaryText">{exp.projects} Projects</span>
                                </div>
                            </motion.div>
                        )
                    })}
                 </div>

                <motion.div 
                variants={textVariant(0.5)}
                className={css.rightSide}>
                    <span className="primaryText">What do I do?</span>
                    {WhatDoIDo.map((paragraph, i) => {
                        return (
                            <span key={i} className="secondaryText">{paragraph}</span>
                        )
                    })}

                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">285</span>
                            <span className="secondaryText">Projects completed</span>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">190+</span>
                            <span className="secondaryText">Happy clients</span>
                        </div>
                    </div>

                </motion.div>

            </div>
        </motion.section>
    )
}