
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Script from "next/script";

import "./assets/css/bootstrap.min.css"
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import "./assets/css/jquery.mCustomScrollbar.min.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Configs } from "./Config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engineering Site",
  description: "A site to solve your engineering problems",
};

const fetchData = async () => {
  const url = Configs.BaseCMSUrl + "/layoutservice/" + Configs.WebsiteId + "/page/en-US/?apiKey=" + Configs.ApiKey;
  console.log("URL", url + "&route=/home");
  const response =  await fetch(url + "&route=/home", {headers: {"content-type": "application/json"}});  
  const json = await response.json();  
  return json;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  

  const response = await fetchData();
  console.log("response", response);
  let sharedComponents: any;
  let components: any;
  if(response){
    sharedComponents = response?.sharedPage?.components;
    components = response?.page?.components;
  }
  return (
    <html lang="en">
      <body>          
        <Header components={sharedComponents?.Header} homeHero={components?.HomeBanner}></Header>     
        {children }      
        <Script strategy="beforeInteractive" src="js/jquery.min.js"></Script>
        <Script strategy="beforeInteractive"  src="js/popper.min.js"></Script>
        <Script strategy="beforeInteractive"  src="js/bootstrap.bundle.min.js"></Script>
        <Script strategy="beforeInteractive"  src="js/jquery-3.0.0.min.js"></Script>
        <Script strategy="beforeInteractive"  src="js/plugin.js"></Script>
        <Footer components={sharedComponents?.Footer}></Footer>    
      </body>
    </html>
  );
}
