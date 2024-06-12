import { renderMarkdownToHTML } from "../controls/dataToHtml"


const AboutUs = ({props}: any) => {
    return(
        <>
            <div className="container">
                <div className="services_main">
                    <div className="row">
                    <div className="services_text" dangerouslySetInnerHTML={renderMarkdownToHTML(props?.globalDataSource?.fields?.Desc?.value)}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs