'use client'
import { useEffect, useState } from "react";
import { renderMarkdownToHTML } from "../controls/dataToHtml";

const ServicesBanner = ({props}: any) => {  
   const cta = JSON.parse(props?.globalDataSource?.fields?.Cta?.value);
   //const services = JSON.parse(props?.globalDataSource?.fields?.Services?.value)
   const serviceListValue = props?.globalDataSource?.fields?.ServiceList?.value
   const [serviceList, setServiceList] = useState<any>();
     useEffect(() => {
        const loadData = async () => {                       
            const response =  await fetch("/api/list", {headers: {"list": serviceListValue}});  
            const json = await response.json();  
            if(json && json !== undefined){
                console.log("List response", json.data);
                setServiceList(json.data);
            }
            else{
               console.log("List null");
            }
            
        }
        loadData();
    }, [])

   
    return(
        <div className="services_section layout_padding">
         <div style={{position: "absolute", zIndex: "-1", width: "100%", height: "70%", backgroundImage: `url(${props?.globalDataSource?.fields?.BackgroundImageUrl?.value})`, "backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "opacity": "0.3"}}></div>          
      
         <div className="container">
            <div className="services_main">
               <div className="row">
                  <div className="col-md-12">
                     <h1 className="services_taital">{props?.globalDataSource?.fields?.Title?.value} <span className="border_0"></span></h1>
                     <p className="services_text">{props?.globalDataSource?.fields?.SubTitle?.value}</p>
                  </div>
               </div>
               <div className="services_section_2">
                  <div className="row">
                     {serviceList && serviceList?.data?.map((service: any, index: number) => (
                        <div className="col-md-4" key={index}>
                           <div className="icon_1"><img src={service?.fields?.Image?.value} height={200} width={200} /></div>
                           <h3 className="selection_text">{service?.fields?.Title?.value}</h3>
                           <div className="many_text" dangerouslySetInnerHTML={renderMarkdownToHTML(service?.fields?.Desc?.value)}></div>
                        </div>
                     ))}                    
                  </div>
               </div>               
               <div className="read_bt"><a href={cta && cta.length > 0 && cta[0].Url}>{cta && cta.length > 0 && cta[0].Title}</a></div>
            </div>
         </div>
      </div>
    )
}
export default ServicesBanner;