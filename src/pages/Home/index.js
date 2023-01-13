import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import MarketingStrategies from "./MarketingStrategies";
import Whymarketing from "./Whymarketing";

function Home() {

    return (
        <Layout>
            <div className="px-32">

                <Intro />
                <MarketingStrategies />
                <Whymarketing />

            </div>
        </Layout>
    )
}


export default Home;