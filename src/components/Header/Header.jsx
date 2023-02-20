import React, { useRef, useState } from "react";
import css from './Header.module.scss';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { toast, Toaster } from "react-hot-toast";
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

export const Header = () => {
    
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef();

    useOutsideAlerter({
        menuRef,
        setMenuOpened
    });

    const phoneHandler = () => {
        navigator.clipboard.writeText("+48883025755");
        toast.success('Phone number copied to clipboard!', {
            id: 'copy'
        });
    }

    return (
        <motion.div 
        initial="hidden"
        className={`paddings ${css.wrapper}`}
        viewport={{once: false, amount: 0.25}}
        variants={headerVariants}
        whileInView="show"
        style={{ boxShadow: headerShadow }}>
            
            <Toaster position="top-center"/>
            <div className={`flexCenter innerWidth ${css.container}`}>
                
                <div className={css.name}>
                    Mikolaj
                </div>

                <ul ref={menuRef} className={css.menu} id="menu" style={ getMenuStyles(menuOpened) }>
                    <li><a href="#experties">Services</a></li>
                    <li><a href="#work">Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#people">Testimonials</a></li>
                    <li><a onClick={phoneHandler}><p>+48 883025755</p></a></li>
                    <BiPhoneCall onClick={phoneHandler} size={'40px'}/>
                </ul>

                <div className={css.menuIcon} onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30}/>
                </div>
            </div>

        </motion.div>
    )
}