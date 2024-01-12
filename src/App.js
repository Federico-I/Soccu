import { useState } from "react";
import "./styles.css";

///////////////////////////////////////////////////////////////////////////////////////
//                            Accordion Conmponent
//////////////////////////////////////////////////////////////////////////////////////

// Wroking on the importance of the controlled componnets and state managemnt 

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  );
}


function Accordion({ data }) {

  const [currOpen, setCurrOpen] = useState(false);

  return ( 
    <div className="accordion">
      {data.map((element, index) => ( 
          <AccordionItem isOpen={currOpen} onOpen={setCurrOpen} num={index} title={element.title} key={element.title}>
            {element.text}
          </AccordionItem>
        )
      )}
      <AccordionItem isOpen={currOpen} onOpen={setCurrOpen} num={25} title="Test" key="Test 1-1">
        <p>This is a test</p>
        <h1>Text part of the test.</h1>
      </AccordionItem>
    </div>
  )
}

function AccordionItem({ isOpen, onOpen, num, title, children}) {

  const openedItem = num === isOpen; //true or false

  function handleToggle() {
   onOpen(isOpen ? "null" : num) // if currentitem is open set state to null otherwise set num.
  }

  return(
    <div className={`item ${ openedItem ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}`: num + 1 }</p>
      <p className="text">{title}</p>
      <p className="icon">{openedItem ? "-" : "+"}</p>
      {openedItem && <div className="content-box">{children}</div> }
    </div>
  )
}



























///////////////////////////////////////////////////////////////////////////////////////
//                    Children Props - Reusable Buttons
//////////////////////////////////////////////////////////////////////////////////////

/*
const messages = ["Learn React", "Apply for Jobs", "Invest your New Income"];

export default function App() {
  return(
    <div>
      <Steps />
      <StepText currentStep={1}>
        <p>Pass in content</p>
        <p>{";)"}</p>
      </StepText>
    </div>
  )
}



function Steps() {

  const [step, setStep ] = useState (1);
  const [isOpen, setIsOpen] = useState(true);
  // const [nameTest, setNameTest] =useState();

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // setStep(step - 1);
  };

  function handleNext() {
    if (step < 3) { 
      setStep((s) => s + 1);
    // setStep(step + 1);
    }
    // setNameTest({name: "Fred"});
  };

  // Two diffrent components will have different memory alocation even if the code logic is the same. Ex: if you render the smae component twice and make changes on one of them, the state of the one you changed won't affect the state of the other, even when the page is refreshed. 

  return (
    <>
      <button className="close " onClick={() => setIsOpen((is) => !is)}>&times;</button>

      { isOpen && (
        <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        
        <StepText currentStep={step}>
          <div className="buttons">
            <Button bgColor="#e7e7e7" textColor="#333" onClick={()=>alert(`Learn how to ${messages[step-1]}`)}>
              Learn Now
            </Button>
          </div>
        </StepText>

        <div className="buttons">
          <Button backgroundColor="#7950f2" textColor="#fff" onClick={handlePrevious}><span>{"<="}</span>Previous</Button>
          <Button backgroundColor="#7950f2" textColor="#fff" onClick={handleNext}>Next<span>{"=>"}</span></Button>
        </div>
      </div>)
      }
    </>
  );
}

function StepText (currentStep, children) {
  return (
    <p className="message"> <h3>Step {currentStep}</h3> {children} </p>
  )
}

function Button (textColor, backgroundColor, onClick, children) {
  return (
    <button style={{backgroundColor: {backgroundColor}, color: {textColor}}} onClick={onClick}>{children}</button>
  )
}
*/