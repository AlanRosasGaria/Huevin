import React from "react";
import Slider from "../components/Slider.jsx"
import Helmet from "../components/Helmet.jsx";
import Section from "../components/Section.jsx";
import Information_home_page from "../components/Information_home_page.jsx";
function Home(){
    return(
    <Helmet title="inicio">
        <Section>
            <Slider/>
        </Section>
        <section>
            <Information_home_page/>
        </section>
        
    </Helmet>
    );
}

export default Home;