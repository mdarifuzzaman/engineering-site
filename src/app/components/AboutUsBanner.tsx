import { renderMarkdownToHTML } from "../controls/dataToHtml";

const AboutUsBanner = ({props}: any) => {
    console.log("About", props);
    const cta = JSON.parse(props?.globalDataSource?.fields?.Cta?.value);

    return(
        <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="about_taital">{props?.globalDataSource?.fields?.Title?.value} <span className="border_0"></span></h1>
                  <p className="about_text">{props?.globalDataSource?.fields?.SubTitle?.value}</p>
               </div>
            </div>
            <div className="about_section_2">
               <div className="row">
                  <div className="col-md-6">
                     <div className="about_img"><img src={props?.globalDataSource?.fields?.Image?.value}/></div>
                  </div>
                  <div className="col-md-6">
                     <div className="about_text_1" dangerouslySetInnerHTML={renderMarkdownToHTML(props?.globalDataSource?.fields?.Desc?.value)}></div>
                     <div className="readmore_bt"><a href={cta && cta.length > 0 && cta[0].Url}>{cta && cta.length > 0 && cta[0].Title}</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}

export default AboutUsBanner;