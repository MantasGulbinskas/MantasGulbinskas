import React from "react";
import {ContactUs} from "../components/Footer/ContactUs";

export const Footer = () => {
    return (<footer>
        <div className="p-10 bg-footer text-white">
            <div className='max-w-7xl mx-auto'>
                <div  className='grid grid-rows-3 md:grid-rows-1 lg:grid-cols-2 gap-9'>
            <ContactUs/>
                </div>
            </div>
        </div>
    </footer>);
}