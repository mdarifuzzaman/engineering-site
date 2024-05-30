import { useEffect, useState } from "react";


const AboutSection = ({aboutBanner}: any) => {
    console.log("About", aboutBanner);
    const [cta, setCta] = useState<any>();
    useEffect(() => {
      if(aboutBanner){
         setCta(JSON.parse(aboutBanner?.globalDataSource?.fields?.Cta?.value));
      }
    }, [aboutBanner]);

    return(
        <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="about_taital">{aboutBanner?.globalDataSource?.fields?.Title?.value} <span className="border_0"></span></h1>
                  <p className="about_text">{aboutBanner?.globalDataSource?.fields?.SubTitle?.value}</p>
               </div>
            </div>
            <div className="about_section_2">
               <div className="row">
                  <div className="col-md-6">
                     <div className="about_img"><img src={aboutBanner?.globalDataSource?.fields?.Image?.value}/></div>
                  </div>
                  <div className="col-md-6">
                     <p className="about_text_1" dangerouslySetInnerHTML={{__html: aboutBanner?.globalDataSource?.fields?.Desc?.value }}></p>
                     <div className="readmore_bt"><a href={cta && cta.length > 0 && cta[0].Url}>{cta && cta.length > 0 && cta[0].Title}</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}

export default AboutSection;