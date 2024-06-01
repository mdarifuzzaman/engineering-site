
import AboutSection from "./components/AboutSection";
import WhatWeDo from "./components/WhatWeDo";
import BlogSection from "./components/BlogSection";
import EventSection from "./components/EventSection";
import ContactSection from "./components/ContactSection";
import ClientSection from "./components/ClientSection";
import { Configs } from "./Config";

const fetchData = async () => {
  const url = Configs.BaseCMSUrl + "/layoutservice/" + Configs.WebsiteId + "/page/en-US/?apiKey=" + Configs.ApiKey;  
  const response =  await fetch(url + "&route=/home", {headers: {"content-type": "application/json"}});  
  const json = await response.json();  
  return json;
}

export default async function Home({children}: any) {

  const response = await fetchData();
  console.log("response", response);
  let sharedComponents: any;
  let components: any;
  if(response){
    sharedComponents = response?.sharedPage.components;
    components = response?.page.components;
  }

  return (
    <>      
      <>
        <AboutSection aboutBanner={components?.AboutUsBanner}></AboutSection>
        <WhatWeDo whatWeDoBanner={components?.ServicesBanner}></WhatWeDo>
        <BlogSection blogSection={components?.AnotherBanner}></BlogSection>
        <EventSection videoBanner={components?.VideoBanner}></EventSection>
        <ContactSection></ContactSection>
        <ClientSection clientSection={components?.ClientSection}></ClientSection>
        <>
          {children}
        </>              
      </>      
    </>
  );
}
