import { useEffect, useState } from "react";

const BlogSection = ({blogSection}: any) => {
   console.log("blogSection", blogSection);
   const [cta, setCta] = useState<any>();
   useEffect(() => {
     if(blogSection){
        setCta(JSON.parse(blogSection?.globalDataSource?.fields?.Cta?.value));
     }
   }, [blogSection]);
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
                     <p className="blog_text" dangerouslySetInnerHTML={{__html: blogSection?.globalDataSource?.fields?.Desc?.value}}></p>
                     <div className="readmore_bt_1"><a href={cta && cta.length > 0 && cta[0].Url}>{cta && cta.length > 0 && cta[0].Title}</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}

export default BlogSection;