const VideoBanner = ({props}: any) => {
   console.log("props", props);
   const cta = JSON.parse(props?.globalDataSource?.fields?.Cta?.value);
    return(
        <div className="event_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="event_taital">{props?.globalDataSource?.fields?.Title?.value}</h1>
               </div>
            </div>
            <div className="event_section_2" style={{"backgroundImage": `url(${props?.globalDataSource?.fields?.VideoImage?.value})`}}>
               <div className="row">
                  <div className="col-md-12">
                     <div className="blog_img">
                        <div className="video_bt">
                           <div className="play_icon"><img src="images/play-icon.png" /></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}

export default VideoBanner;