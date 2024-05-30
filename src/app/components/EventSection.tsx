import { useEffect, useState } from "react";

const EventSection = ({videoBanner}: any) => {
   console.log("videoBanner", videoBanner);
    const [cta, setCta] = useState<any>();
    useEffect(() => {
      if(videoBanner){
         setCta(JSON.parse(videoBanner?.globalDataSource?.fields?.Cta?.value));
      }
    }, [videoBanner]);
    return(
        <div className="event_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="event_taital">{videoBanner?.globalDataSource?.fields?.Title?.value}</h1>
               </div>
            </div>
            <div className="event_section_2" style={{"backgroundImage": `url(${videoBanner?.globalDataSource?.fields?.VideoImage?.value})`}}>
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

export default EventSection;