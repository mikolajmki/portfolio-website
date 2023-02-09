import React from "react";
import css from './Header.module.scss';
import { BiPhoneCall } from 'react-icons/bi';

export const Header = () => {
    return (
        <div className={`paddings ${css.wrapper}`}>
            
            <div className={`flexCenter innerWidth ${css.container}`}>
                
                <div className={css.name}>
                    Mikolaj
                </div>

                <ul className={css.menu}>
                    <li><a href="">Services</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href=""><p>+48 883025755</p></a></li>
                    <BiPhoneCall size={'40px'}/>
                </ul>

            </div>

        </div>
    )
}