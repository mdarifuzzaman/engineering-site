'use client'
import { useEffect, useState } from "react";
import { Configs } from "../Config";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({children}: any) {
    const [pageData, setPageData] = useState<any>();
  const [components, setComponents] = useState<any>([]);
  const [sharedComponents, setSharedComponents] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = Configs.BaseCMSUrl + "/layoutservice/" + Configs.WebsiteId + "/page/en-US/?apiKey=" + Configs.ApiKey;
      console.log("URL", url);
      fetch("/api/home", {headers: {"req_url": url, "route": "/about-us"}}).then(res => res.json()).then(json => {
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

    return(
        <>
            {children} 
        </>
    )
}