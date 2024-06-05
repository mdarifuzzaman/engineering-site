import { useEffect, useState } from "react";
import { renderMarkdownToHTML } from "../controls/dataToHtml";

const AnotherBanner = ({props}: any) => {
   console.log("props", props);
   const cta = JSON.parse(props?.globalDataSource?.fields?.Cta?.value);

    return(
        <div className="blog_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="blog_img"><img src={props?.globalDataSource?.fields?.Image?.value} /></div>
               </div>
               <div className="col-md-6">
                  <div className="blog_taital_main">
                     <h1 className="blog_taital">{props?.globalDataSource?.fields?.Title?.value}</h1>
                     <div className="blog_text" dangerouslySetInnerHTML={renderMarkdownToHTML(props?.globalDataSource?.fields?.Desc?.value)}></div>
                     <div className="readmore_bt_1"><a href={cta && cta.length > 0 && cta[0].Url}>{cta && cta.length > 0 && cta[0].Title}</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}

export default AnotherBanner;