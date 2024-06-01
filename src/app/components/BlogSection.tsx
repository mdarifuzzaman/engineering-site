import { useEffect, useState } from "react";
import { renderMarkdownToHTML } from "../controls/dataToHtml";

const BlogSection = ({blogSection}: any) => {
   console.log("blogSection", blogSection);
   const cta = JSON.parse(blogSection?.globalDataSource?.fields?.Cta?.value);

    return(
        <div className="blog_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="blog_img"><img src={blogSection?.globalDataSource?.fields?.Image?.value} /></div>
               </div>
               <div className="col-md-6">
                  <div className="blog_taital_main">
                     <h1 className="blog_taital">{blogSection?.globalDataSource?.fields?.Title?.value}</h1>
                     <div className="blog_text" dangerouslySetInnerHTML={renderMarkdownToHTML(blogSection?.globalDataSource?.fields?.Desc?.value)}></div>
                     <div className="readmore_bt_1"><a href={cta && cta.length > 0 && cta[0].Url}>{cta && cta.length > 0 && cta[0].Title}</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}

export default BlogSection;