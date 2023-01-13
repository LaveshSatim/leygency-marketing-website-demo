import React from "react";

const Contactform = () => {


    return (
        <div>
            <form className="flex flex-col space-y-10" >

                <h1 className="text-3xl font-semibold text-primary mb-5">Send a Message</h1>

                <div className="flex space-x-10">
                    <input type={Text} placeholder=" First Name" className="hover:shadow-lg border py-3 rounded-lg px-5 bg-blue-50 focus:outline-none text-gray-500  w-full" />
                    <input type={Text} placeholder=" Last Name" className="border hover:shadow-lg py-3 rounded-lg px-5 bg-blue-50 focus:outline-none text-gray-500  w-full" />
                </div>

                <div className="flex space-x-10 mt-5">
                    <input type={Text} placeholder=" Email" className="border hover:shadow-lg py-3 rounded-lg px-5 bg-blue-50 focus:outline-none text-gray-500  w-full" />
                    <input type={Text} placeholder=" Phone No." className="border hover:shadow-lg py-3 rounded-lg px-5 bg-blue-50 focus:outline-none text-gray-500  w-full" />
                </div>
                <div className="flex space-x-10 mt-5">
                    <textarea type="text" rows={10} placeholder=" Message" className="border hover:shadow-lg py-3 rounded-lg px-5 bg-blue-50 focus:outline-none text-gray-500 w-full" />


                </div>

                <button className="border p-2 w-48 rounded-lg hover:shadow-lg text-center text-gray-300 bg-secondary text-lg hover:bg-blue-300">Send a Message</button>

            </form>
        </div>
    )
}

export default Contactform;