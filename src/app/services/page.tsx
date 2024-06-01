import { Configs } from "../Config";
import Services from "../components/Services";
import WhatWeDo from "../components/WhatWeDo";

const fetchData = async () => {
    const url = Configs.BaseCMSUrl + "/layoutservice/" + Configs.WebsiteId + "/page/en-US/?apiKey=" + Configs.ApiKey;  
    const response =  await fetch(url + "&route=/services", {headers: {"content-type": "application/json"}});  
    const json = await response.json();  
    return json;
  }

const Page = async () => {
  const response = await fetchData();
  console.log("Services", response);
  let components: any;
  if(response){
    components = response?.page.components;
  }

    return(
        <>
            <Services></Services>
            <WhatWeDo whatWeDoBanner={components?.Services}></WhatWeDo>            
        </>
    )
}

export default Page;