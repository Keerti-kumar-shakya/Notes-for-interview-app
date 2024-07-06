import { useGlobalContext } from "../Context";
import HtmlBtn from "../components/HtmlBtn"


const Html = () => {

  const {htmlFinalData, initialDataSend} = useGlobalContext();


  const display = htmlFinalData? htmlFinalData : initialDataSend;
  return (
    <>
    <h1>Html</h1>
  <article className="btn-container">
    <HtmlBtn/>
  </article>

    <article className="content-container">

    {display.map((text)=> {
      return(
      <div key={text.id}>
        <p>QUESTION :<br/><br/> {text.question}</p>
        <p>ANSWER :<br/><br/> {text.studyMaterial}</p>
        <br/>
        <p>Example: <br/><br/>{text.example}</p>
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

export default Html
