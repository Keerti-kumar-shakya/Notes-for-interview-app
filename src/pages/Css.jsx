import { useGlobalContext } from "../Context";
import CssBtn from "../components/CssBtn";

const Css = () => {

  const {cssFinalData, initialDataSend} = useGlobalContext();
  const display = cssFinalData? cssFinalData : initialDataSend;

  return (
    <>
    <h1>css</h1>
    <article className="btn-container">
    <CssBtn/>
  </article>
    
  <article className="content-container">

 {display.map((text)=> {
  return(
  <div key={text.id}>
    <p>ANSWER : {text.studyMaterial}</p>
    <img className="image" src= {text.img} />

   <video className="video" width="320" height="240" controls>
    <source src={text.video}/>
    </video>
  </div>
  )
})} 
  </article>
    </>
  )
}

export default Css
