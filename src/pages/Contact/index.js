import React from "react";
import Layout from "../../components/Layout";
import Address from "./Address";
import Contactform from "./Contactform";

function Contact() {

    return (

        <Layout>

            <div className="grid grid-cols-2 px-32 gap-20 mt-14 ">

                <Address />
                <Contactform />


            </div>
            <div className="flex justify-center mt-10">
                <div className="px-16">
                    <h1 className="text-2xl font-extralight">Designed and Developed By</h1>
                    <h1 className="text-xl font-bold text-red-500 bg-yellow-100 max-w-max hover:shadow-xl">Lavesh Satim</h1>
                </div>
            </div>

        </Layout>

    )
}

export default Contact;