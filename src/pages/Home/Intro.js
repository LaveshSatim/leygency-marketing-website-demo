import React from "react";

const Intro = () => {




    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2  first-line h-screen items-center ">

            <div className="flex flex-col space-y-10">
                <h1 className="md:text-7xl sm:text-7xl   font-semibold text-primary">The Best <br /><b className="text-secondary">Marketing</b></h1>
                <h1 className="text-5xl  font-semibold">Does't feel like Marketing</h1>
                <button className="px-10 py-5 bg-secondary text-white text-xl max-w-max hover:bg-primary" >Get Started</button>
            </div>
            <div className="p-10">
                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_hwcplx4x.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>

        </div>
    )
}

export default Intro;