const WhatWeDo = ({whatWeDoBanner}: any) => {
   console.log("whatWeDoBanner", whatWeDoBanner);
   const cta = JSON.parse(whatWeDoBanner?.globalDataSource?.fields?.Cta?.value);
   const services = JSON.parse(whatWeDoBanner?.globalDataSource?.fields?.Services?.value)
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
                  </div>
               </div>               
               <div className="read_bt"><a href={cta && cta.length > 0 && cta[0].Url}>{cta && cta.length > 0 && cta[0].Title}</a></div>
            </div>
         </div>
      </div>
    )
}
export default WhatWeDo;