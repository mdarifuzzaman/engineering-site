import { Fragment } from "react";
import { renderMarkdownToHTML } from "../controls/dataToHtml";

export default function HeroBanner({props}: any){
    const markup = renderMarkdownToHTML(props?.globalDataSource?.fields?.SubTitle?.value);
    return(
        <div className="banner_section layout_padding">
            <div id="my_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="banner_taital_main">
                          <h1 className="banner_taital active" style={{color: "#f5a738"}}>
                           {props?.globalDataSource?.fields?.Title?.value}
                          </h1>
                            {markup && (<div style={{color: "#fff"}} className="banner_text" dangerouslySetInnerHTML={markup}>                        
                          </div>)}    
                          <div className="btn_main">

                            { props?.globalDataSource?.fields?.Cta?.value && JSON.parse(props?.globalDataSource?.fields?.Cta?.value).map((ctaData: any, index: number) => (
                              <Fragment key={index}><div className={index === 0? "started_text active": "started_text"}>
                              <a href={ctaData?.Url}>{ctaData?.ButtonText}</a>
                              </div>
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                                
              </div>              
            </div>
          </div>
    )
}