import { useEffect, useState } from "react";

const WhatWeDo = ({whatWeDoBanner}: any) => {
   console.log("whatWeDoBanner", whatWeDoBanner);
   const [cta, setCta] = useState<any>();
   const [services, setServices] = useState<any>();
   useEffect(() => {
     if(whatWeDoBanner){
        setCta(JSON.parse(whatWeDoBanner?.globalDataSource?.fields?.Cta?.value));
        setServices(JSON.parse(whatWeDoBanner?.globalDataSource?.fields?.Services?.value));
     }
   }, [whatWeDoBanner]);
    return(
        <div className="services_section layout_padding">
         <div className="container">
            <div className="services_main">
               <div className="row">
                  <div className="col-md-12">
                     <h1 className="services_taital">{whatWeDoBanner?.globalDataSource?.fields?.Title?.value} <span className="border_0"></span></h1>
                     <p className="services_text">{whatWeDoBanner?.globalDataSource?.fields?.SubTitle?.value}</p>
                  </div>
               </div>
               <div className="services_section_2">
                  <div className="row">
                     {services && services.map((service: any, index: number) => (
                        <div className="col-md-4" key={index}>
                           <div className="icon_1"><img src={service?.Image} /></div>
                           <h3 className="selection_text">{service?.Title}</h3>
                           <p className="many_text">{service?.Desc} </p>
                        </div>
                     ))}
                     {/* <div className="col-md-4">
                        <div className="icon_1"><img src="images/icon-1.png" /></div>
                        <h3 className="selection_text">Research and Analytics</h3>
                        <p className="many_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or </p>
                     </div>
                     <div className="col-md-4">
                        <div className="icon_1"><img src="images/icon-2.png" /></div>
                        <h3 className="selection_text">Business Plans</h3>
                        <p className="many_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or </p>
                     </div>
                     <div className="col-md-4">
                        <div className="icon_1"><img src="images/icon-3.png" /></div>
                        <h3 className="selection_text">Selection of Business</h3>
                        <p className="many_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or </p>
                     </div> */}
                  </div>
               </div>
               {/* <div className="services_section_2">
                  <div className="row">
                     <div className="col-md-4">
                        <div className="icon_1"><img src="images/icon-4.png" /></div>
                        <h3 className="selection_text">Research and Analytics</h3>
                        <p className="many_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or </p>
                     </div>
                     <div className="col-md-4">
                        <div className="icon_1"><img src="images/icon-5.png" /></div>
                        <h3 className="selection_text">Business Plans</h3>
                        <p className="many_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or </p>
                     </div>
                     <div className="col-md-4">
                        <div className="icon_1"><img src="images/icon-6.png" /></div>
                        <h3 className="selection_text">Selection of Business</h3>
                        <p className="many_text">There are many variations of passages of Lorem Ipsum available, but the form, by injected humour, or </p>
                     </div>
                  </div>
               </div> */}
               <div className="read_bt"><a href={cta && cta.length > 0 && cta[0].Url}>{cta && cta.length > 0 && cta[0].Title}</a></div>
            </div>
         </div>
      </div>
    )
}
export default WhatWeDo;