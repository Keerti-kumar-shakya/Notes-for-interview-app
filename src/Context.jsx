import { createContext, useContext, useState } from "react";
import { html } from "./Data/htmlData";
import { css } from "./Data/CssData";
import {javascript} from './Data/JavaScriptData';
import {react} from './Data/ReactData';
import img_icon from './assets/icon.jpg'

const AppContext = createContext();

const initialDataSend = [{id: 0,
  topic: 'intail-btn', 
  studyMaterial: 'click question button to start learning',
  img: img_icon,
  video: 'NA'
}]

export const AppProvider = ({children}) => {
  const [htmlFinalData, setHtmlFinalData] = useState(null);
  const [cssFinalData, setCssFinalData] = useState(null);
  const [javaScriptFinalData, setJavaScriptFinalData] = useState(null);
  const [reactFinalData, setReactFinalData] = useState(null);

  const htmlDataHandle = (e) => {
   const data = parseInt(e.currentTarget.dataset.id);
  
   const sendDataHtml = html.filter((htmlData) => htmlData.id === data);
   setHtmlFinalData(sendDataHtml)
  }

  const cssDataHandle = (e) => {
    const data = parseInt(e.currentTarget.dataset.id);
   
    const sendDataCss = css.filter((cssData) => cssData.id === data);
    setCssFinalData(sendDataCss)
   }

   const javascriptDataHandle = (e) => {
    const data = parseInt(e.currentTarget.dataset.id);
   
    const sendDataJavascript = javascript.filter((javascriptData) => javascriptData.id === data);
    setJavaScriptFinalData(sendDataJavascript)
   }

   const reactDataHandle = (e) => {
    const data = parseInt(e.currentTarget.dataset.id);
   
    const sendDataReact = react.filter((reactData) => reactData.id === data);
    setReactFinalData(sendDataReact)
   }



  return (
    <AppContext.Provider 
    value={
      {htmlFinalData, htmlDataHandle,
      cssFinalData, cssDataHandle,
      javaScriptFinalData, javascriptDataHandle,
      reactFinalData, reactDataHandle,
      initialDataSend   
      }
    }
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}
