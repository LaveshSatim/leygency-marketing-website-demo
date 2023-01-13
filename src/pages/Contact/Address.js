import React from "react";

const Address = () => {


    return (
        <div className="flex justify-center">
            <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white" >
                <h1 className="text-3xl font-semibold">Get In Touch</h1>
                <p>Leygency is a digital marketing agency, We provide marketing and developing services </p>

                <div className="flex space-x-5 items-center">
                    <div className="border  bg-yellow-300 p-2 rounded-xl">
                        <i className="text-secondary ri-map-pin-line text-2xl"></i>
                    </div>
                    <div>
                        <h1 className="font-semibold text-xl">Visit Us,</h1>
                        <p>0-7/8/65, Thane, India</p>
                    </div>
                </div>


                <div className="flex space-x-5 items-center">
                    <div className="border  bg-yellow-300 p-2 rounded-xl">
                        <i className="text-secondary ri-mail-line text-2xl"></i>
                    </div>
                    <div>
                        <h1 className="font-semibold text-xl">Mail Us,</h1>
                        <p>satimlavesh@gmail.com</p>

                    </div>
                </div>


                <div className="flex space-x-5 items-center">
                    <div className="border  bg-yellow-300 p-2 rounded-xl">
                        <i className="text-secondary ri-phone-line text-2xl"></i>
                    </div>
                    <div>
                        <h1 className="font-semibold text-xl">Call Us,</h1>
                        <p>+91-9860119474</p>

                    </div>
                </div>

            </div>
        </div>
    )
}


export default Address;