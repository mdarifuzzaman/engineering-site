import AboutUsBanner from "./components/AboutUsBanner";
import ServicesBanner from "./components/ServicesBanner";
import AnotherBanner from "./components/AnotherBanner";
import VideoBanner from "./components/VideoBanner";
import ContactSection from "./components/ContactSection";
import ClientSection from "./components/ClientSection";
import React from "react";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import ServiceCivilEng from "./components/ServiceCivilEng";
import ServiceTrafficEng from "./components/ServiceTrafficEng";
import ServiceFeatureLevelSurvey from "./components/ServiceFeatureLevelSurvey";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

const Components: any = {
    HomeBanner: HeroBanner,
    AboutUsBanner: AboutUsBanner,
    ServicesBanner: ServicesBanner,
    AnotherBanner: AnotherBanner,
    VideoBanner: VideoBanner,
    ContactSection: ContactSection,   
    ServiceCivilEng: ServiceCivilEng,
    ServiceTrafficEng: ServiceTrafficEng,
    ServiceFeatureLevelSurvey: ServiceFeatureLevelSurvey,
    ContactUs: ContactUs,
    AboutUs: AboutUs
}

export default function ComponentFactory(block: any){
    if(typeof Components[block.component] !== "undefined"){
        return React.createElement(Components[block.component], {
            key: block.name,
            props: block.value
        });
    }

    return React.createElement(
        () => <div className="h-4 bg-color-yellow">The component {block.component} has not been created yet.</div>,
        { key: block.name}
    )
}