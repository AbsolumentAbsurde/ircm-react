import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import './App.css';

function RateBox(props) {
  return (
   <div className='flex relative rounded-2xl bg-gray-800 h-100 w-100'>
     {props.children}
   </div>
  );
}

function StarBox(props) {
  return (
    <div className='flex justify-center items-center relative top-8 left-14 h-14 w-14 bg-zinc-900 rounded-full'>
      {props.children}
    </div>
  );
}

function CoreBox(props) {
  return (
    <div className='flex flex-col h-80 w-80 relative top-28 left-1'>
      {props.children}
    </div>
  );
}

const setStarsInitial = [false,false,false,false,false];
let actualStars = [...setStarsInitial];

function StarRate({ children, id, onClick }) {
  const [stars, setStars] = useState([...setStarsInitial]);

  const toggleColor = (index) => {
    const newCheckedStars = [...setStarsInitial];

    if(!stars[index]) {
      newCheckedStars[index] = true;
    }

    setStars(newCheckedStars);
    actualStars = [...newCheckedStars];
  };

  return (
    <div className='flex flex-row justify-center items-center h-20 w-68 gap-4'>
      {stars.map((isChecked, index) => (
        <button key={index} onClick={() => toggleColor(index)} className={`flex justify-center items-center text-1xl font-bold rounded-full h-12 w-12 ${stars[index] ? "bg-white text-black" : "bg-zinc-900 text-white"} hover:bg-orange-500`}>{index + 1}{children}</button>
      ))}
    </div>
  );
}

function SubmitButton(props) {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if(!actualStars.includes(true)) {
      setState(true);
    }
    else {
      navigate("/thankyou", {state: { rate: actualStars.indexOf(true) + 1 } });
      actualStars = [...setStarsInitial];
      setState(actualStars);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <p id="error" className={`${ state ? "text-red-600" : "text-gray-800" }`}>Veuillez choisir une note svp.</p>
      <button onClick={handleClick} className='flex justify-center items-center h-12 w-68 bg-orange-500 text-black hover:bg-yellow-50 rounded-full tracking-widest font-bold text-1xl relative left-0'>
        SUBMIT
        {props.children}
      </button>
    </div>
  );
}

function App() {
  return (
    <RateBox>
      <StarBox>
        <img src="/assets/images/icon-star.svg" alt="NOT FOUND" className='w-5 h-5'/>
      </StarBox>
      <CoreBox>
        <h1 className='text-4xl text-yellow-50'>How did we do?</h1>
        <br />
        <p className='leading-5 text-yellow-50'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <br />
        <StarRate></StarRate>
        <SubmitButton></SubmitButton>
      </CoreBox>
    </RateBox>
  );
}

export default App;
