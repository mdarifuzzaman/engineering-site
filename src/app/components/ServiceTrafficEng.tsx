import { renderMarkdownToHTML } from "../controls/dataToHtml";

const ServiceTrafficEng = ({props}: any) => {
    console.log("ServiceCivilEng", props);
     return(
         <div className="services_section layout_padding">
          <div className="container">
             <div className="services_main">
                <div className="row">
                   <div className="col-md-12">
                      <h1 className="services_taital">{props?.globalDataSource?.fields?.Title?.value} <span className="border_0"></span></h1>
                      <div className="services_text" dangerouslySetInnerHTML={renderMarkdownToHTML(props?.globalDataSource?.fields?.Summary?.value)}></div>
                   </div>
                </div>
                <div className="services_section_2">
                   <div className="row">
                     <div className="col-md-12">                            
                            {/* <h3 className="selection_text">{service?.Title}</h3>
                            <p className="many_text">{service?.Desc} </p> */}
                           <div className="many_text" dangerouslySetInnerHTML={renderMarkdownToHTML(props?.globalDataSource?.fields?.Details?.value)}></div>
                      </div>                    
                   </div>
                </div>               
                {/* <div className="read_bt"><a href={cta && cta.length > 0 && cta[0].Url}>{cta && cta.length > 0 && cta[0].Title}</a></div> */}
             </div>
          </div>
       </div>
     )
 }
 export default ServiceTrafficEng;