
const ClientSection = ({clientSection}: any) => {

    return (
        <div className="clients_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="clients_taital">{clientSection?.globalDataSource?.fields?.Title?.value}</h1>
               </div>
            </div>
            <div className="client_section_2">
               <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                     {clientSection?.globalDataSource?.fields?.ClientRemarks?.value && JSON.parse(clientSection?.globalDataSource?.fields?.ClientRemarks?.value).map((remarks:any, index: number) => (
                        <div className={index == 0? "carousel-item active": "carousel-item"} key={index}>
                           <h3 className="client_name">{remarks?.client_name}</h3>
                           <p className="event_text">{remarks?.event_text}</p>
                        </div>
                     ))}
                     
                     {/* <div className="carousel-item">
                        <h3 className="client_name">Den Mork</h3>
                        <p className="event_text">Lorem ipsum dolor minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                     </div>
                     <div className="carousel-item">
                        <h3 className="client_name">Den Mork</h3>
                        <p className="event_text">Lorem ipsum dolor minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}

export default ClientSection;