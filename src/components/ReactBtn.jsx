import {react} from '../Data/ReactData.js'
import { useGlobalContext } from '../Context.jsx';

const ReactBtn = () => {
  const {reactDataHandle, reactFinalData} = useGlobalContext();
  const matchBtnId = reactFinalData? reactFinalData[0].id : 0;
  return (
    <>
    {react.map((btn, index) => 
    <button 
    className= {`btn ${index === matchBtnId? 'active-btn' : ''}`}
    key={index} 
    data-id = {index}
    onClick={reactDataHandle}
    >
      {btn.topic}
      </button>
    )}
    </>    
  )
}

export default ReactBtn
