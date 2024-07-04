import {css} from '../Data/CssData.js';
import { useGlobalContext } from '../Context.jsx';


const CssBtn = () => {
  const {cssDataHandle, cssFinalData} = useGlobalContext();
  const matchBtnId = cssFinalData? cssFinalData[0].id : 0;
  return (
    <>
    {css.map((btn, index) => 
    <button 
    className= {`btn ${index === matchBtnId? 'active-btn' : ''}`}
    key={index} 
    data-id = {index}
    onClick={cssDataHandle}
    >
      {btn.topic}
      </button>
    )}
    </>    
  )
}

export default CssBtn
