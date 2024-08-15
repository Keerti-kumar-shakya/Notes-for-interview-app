import { useGlobalContext } from "../Context";
import ReactBtn from "../components/ReactBtn";

const React = () => {
  const {reactFinalData, initialDataSend} = useGlobalContext();
  const display = reactFinalData? reactFinalData : initialDataSend;

  return (
    <>
  <h1>React</h1>
  <article className="btn-container">
  <ReactBtn/>
  </article>
   
  <article className="content-container">

  {display.map((text)=> {
  return(
      <div key={text.id}>
       <p className="question"><b>QUESTION :</b> {text.question}</p>
        <p className="answer"> <b>ANSWER :</b> {text.studyMaterial}</p>
        <p className="example"> <b>Example:</b> {text.example}</p>
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

export default React
