
import {html} from '../Data/htmlData.js';
import { useGlobalContext } from '../Context.jsx';


const HtmlBtn = () => {

  const {htmlDataHandle, htmlFinalData} = useGlobalContext();

  const matchBtnId = htmlFinalData? htmlFinalData[0].id : 0;
  
  return (

    <>
    {html.map((btn, index) => 
    <button 
    className= {`btn ${index === matchBtnId? 'active-btn' : ''}`}
    key={index} 
    data-id = {index}
    onClick={htmlDataHandle}
    >
      {btn.topic}
      </button>
    )}
    </>
      
  
  )
}

export default HtmlBtn
