import React from "react";

const Numbers = () => {

    return (
        <div className="px-52 mt-20">

<h1 className="text-gray-500 text-3xl my-4">Until Today we have done...</h1>

            <div className="bg-secondary flex space-x-10 p-5 justify-between rounded">

                <div className="flex flex-col space-y-2">
                    <h1 className=" text-9xl text-white">153</h1>
                    <h1 className=" text-2xl text-white">clients</h1>

                </div>

                <div className="flex flex-col space-y-2">
                    <h1 className=" text-9xl text-white">149</h1>
                    <h1 className=" text-2xl text-white">projects</h1>

                </div>
                <div className="flex flex-col space-y-2 ">
                    <h1 className=" text-9xl text-white">24</h1>
                    <h1 className=" text-2xl text-white">locations</h1>

                </div>
            </div>
        </div>
    )

}


export default Numbers;