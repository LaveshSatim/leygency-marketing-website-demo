import React from "react";

const MarketingStrategies = () => {

    const strategies = [
        {
            title: "CONTENT MARKETING",
            description:
                "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online. ",
            image: "images/content-marketing.png",
        },
        {
            title: "INBOUND MARKETING",
            description:
                "Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategies to attract, engage, and delight customers. ",
            image: "images/inbound-marketing.png",
        },
        {
            title: "SOCIAL MEDIA",
            description:
                "Social media marketing focuses on providing users with content they find valuable and want to share across their social networks, resulting in increased visibility and website traffic.   ",
            image: "images/social-media.png",
        },
        {
            title: "SEARCH ENGINE OPTIMIZATION",
            description:
                "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
            image: "images/seo.png",
        },
    ];

    return (
        <div>

            <h1 className="text-5xl font-semibold text-primary">Want to boost your business growth ?</h1>
            <h1 className="text-7xl font-semibold  mt-10 text-primary">The <b className="text-secondary">Solution</b> is here..</h1>
            <p className="text-gray-600 text-xl  mt-10">A marketing information system is a management information system designed to support marketing decision making. Jobber defines it as a "system in which marketing data is formally gathered, stored, analysed and distributed to managers in accordance with their informational needs on a regular basis</p>

            <div className="grid grid-cols-2 gap-20 mt-10">

                {strategies.map(i => {

                    return (
                        <div className="border border-primary p-5 flex flex-col space-y-10 rounded transform hover:scale-105 duration-300">
                            <h1 className="mx-20  text-center text-secondary -mt-8 bg-white border-primary border text-2xl rounded py-2">{i.title}</h1>
                            <img src={i.image} alt={i.image} className="h-24 w-24  " />
                            <p className="text-gray-400 text-md hover:text-primary">{i.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MarketingStrategies;