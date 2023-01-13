import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {

    const location = useLocation();

    const menuItem = [
        {
            title: 'Home',
            path: '/',
            icon: 'ri-home-smile-line'
        },
        {
            title: 'About',
            path: '/about',
            icon: 'ri-information-line'
        },
        {
            title: 'Clients',
            path: '/clients',
            icon: 'ri-user-2-fill'
        },
        {
            title: 'Contact',
            path: '/contact',
            icon: 'ri-contacts-book-2-fill'
        }
    ];


    return (

        <div>

            {/* content */}
            <div className="pb-44 overflow-x-hidden">{children}</div>

            {/* footer */}
            <div className="fixed bottom-10 left-0 right-0">
                <div className="flex w-full justify-center">

                    {menuItem.map((item, index) => (
                        <div className="flex flex-col justify-end items-center">
                            {location.pathname === item.path &&
                             (
                              <div className="flex justify-center flex-col items-center">

                                <div className="h-5 w-10 bg-primary rounded-t-full">

                                </div>
                                <div className="h-5 w-20 bg-primary rounded-t-full text-center">
                                    <i className={`${item.icon}  text-white text-xl`}></i>
                                </div>


                            </div>)}
                            <div className={`px-20 bg-primary py-5   ${index === 0 && 'rounded-l'} ${index === menuItem.length - 1 && 'rounded-r'} flex items-center justify-center space-x-2`}>
                                {location.pathname !== item.path && <i className={` ${item.icon} text-secondary text-xl`}></i>}

                                <Link to={`${item.path}`} className="text-secondary text-xl">{item.title}</Link>

                                {/* <Link to={'/contact'}>home</Link>  */}
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>

    )
}

export default Layout;