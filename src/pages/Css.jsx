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
        <p className="question"><b>QUESTION :</b> {text.question}</p>
        <p className="answer"> <b>ANSWER :</b> {text.studyMaterial}</p>
        <label>Video example: <a href={text.video} target="_blank">Link</a></label>
        <p className="example"> <b>Example:</b> {text.example}</p>

    <img className="image" src= {text.img} />
  </div>
  )
})} 
  </article>
    </>
  )
}

export default Css
