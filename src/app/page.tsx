'use client'
import AboutSection from "./components/AboutSection";
import WhatWeDo from "./components/WhatWeDo";
import BlogSection from "./components/BlogSection";
import EventSection from "./components/EventSection";
import ContactSection from "./components/ContactSection";
import ClientSection from "./components/ClientSection";
import { useEffect, useState } from "react";
import { Configs } from "./Config";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home({children}: any) {

  const [pageData, setPageData] = useState<any>();
  const [components, setComponents] = useState<any>([]);
  const [sharedComponents, setSharedComponents] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = Configs.BaseCMSUrl + "/layoutservice/" + Configs.WebsiteId + "/page/en-US/?apiKey=" + Configs.ApiKey;
      console.log("URL", url);
      fetch("/api/home", {headers: {"req_url": url, "route": "/home"}}).then(res => res.json()).then(json => {
        setPageData(json);
        console.log("Layoutdata", json);
        if(json){
          setSharedComponents(json.data?.sharedPage && json.data?.sharedPage.components);
          setComponents(json.data?.page && json.data?.page.components);
        }
      });           
    }
    fetchData();
  }, []);

  return (
    <>      
      <>
        <AboutSection aboutBanner={components?.AboutUsBanner}></AboutSection>
        <WhatWeDo whatWeDoBanner={components?.ServicesBanner}></WhatWeDo>
        <BlogSection blogSection={components?.AnotherBanner}></BlogSection>
        <EventSection videoBanner={components?.VideoBanner}></EventSection>
        <ContactSection></ContactSection>
        <ClientSection></ClientSection>
        <>
          {children}
        </>              
      </>      
    </>
  );
}
