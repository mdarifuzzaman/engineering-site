import { Fragment } from "react";
import { renderMarkdownToHTML } from "../controls/dataToHtml";


const Header = ({components, homeHero}: any) => {
    console.log("Header data", homeHero);
    const markup = renderMarkdownToHTML(homeHero?.globalDataSource?.fields?.SubTitle?.value);
    return(
        <div className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="logo">
                <a href="/">
                  <img src={components?.globalDataSource?.fields?.HeaderLogo?.value} alt="company logo"/>
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  {components?.globalDataSource?.fields?.HeaderNav.value && JSON.parse(components?.globalDataSource?.fields?.HeaderNav.value).map((nav: any, index: number) => (
                    <li  className={index === 0? "nav-item active": "nav-item"} key={index}>
                      <a className="nav-link" href={nav?.Url}>
                        {nav?.Title}
                      </a>
                    </li>
                  ))}                  
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                  <div className="login_bt">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </form> */}
              </div>
            </nav>
          </div>
          <div className="banner_section layout_padding">
            <div id="my_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="banner_taital_main">
                          <h1 className="banner_taital">
                           {homeHero?.globalDataSource?.fields?.Title?.value}
                          </h1>
                            {markup && (<div className="banner_text" dangerouslySetInnerHTML={markup}>                        
                          </div>)}    
                          <div className="btn_main">

                            { homeHero?.globalDataSource?.fields?.Cta?.value && JSON.parse(homeHero?.globalDataSource?.fields?.Cta?.value).map((ctaData: any, index: number) => (
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
        </div>
    )
}

export default Header;