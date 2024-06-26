import { Fragment } from "react";
import { renderMarkdownToHTML } from "../controls/dataToHtml";

const Footer = ({components}: any) => {
  console.log("Footer data", components);
    return(
        <div className="copyright_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p className="copyright_text">
                {components?.globalDataSource?.fields?.FooterText?.value}
              </p>
              <div className="copyright_text"> 
                {
                  <div dangerouslySetInnerHTML={renderMarkdownToHTML(components?.globalDataSource?.fields?.PoweredBy?.value)}></div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer;