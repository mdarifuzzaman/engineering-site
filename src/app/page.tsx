'use client'
import AboutSection from "./components/AboutSection";
import WhatWeDo from "./components/WhatWeDo";
import BlogSection from "./components/BlogSection";
import EventSection from "./components/EventSection";
import ContactSection from "./components/ContactSection";
import ClientSection from "./components/ClientSection";
import { useEffect, useState } from "react";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [pageData, setPageData] = useState<any>();
  const [components, setComponents] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch("/api/home").then(res => res.json()).then(json => {
        setPageData(json);
        console.log("Layoutdata", json);
        if(json){
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
