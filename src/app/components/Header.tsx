import { Fragment } from "react";
import { renderMarkdownToHTML } from "../controls/dataToHtml";
import { headers } from "next/headers";


const Header = ({components, homeHero}: any) => {
    console.log("Header data", homeHero);    
    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    return(
        <div className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="logo">
                <a href="/">
                  <img src={components?.globalDataSource?.fields?.HeaderLogo?.value} alt="company logo" height={30} width={200}/>
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
                    <li  className={pathname && pathname?.length > 1 && nav?.Title == "Contact Us" && pathname.includes("contact-us") ? "nav-item active":pathname?.length === 1 &&  nav?.Title.toLowerCase() === "home" ? "nav-item active": pathname && pathname?.length > 0 && pathname?.includes(nav?.Title.toLowerCase()) ? "nav-item active": "nav-item"} key={index}>
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
        </div>
    )
}

export default Header;