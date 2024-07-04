import { javascript } from '../Data/JavaScriptData.js';
import { useGlobalContext } from '../Context.jsx';

const JavaScriptBtn = () => {
  const {javascriptDataHandle, javaScriptFinalData} = useGlobalContext();
  const matchBtnId = javaScriptFinalData? javaScriptFinalData[0].id : 0;
  return (
    <>
       {javascript.map((btn, index) => 
    <button 
    className= {`btn ${index === matchBtnId? 'active-btn' : ''}`}
    key={index} 
    data-id = {index}
    onClick={javascriptDataHandle}
    >
      {btn.topic}
      </button>
    )}
    </>
  )
}

export default JavaScriptBtn
