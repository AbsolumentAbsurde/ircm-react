import { useLocation } from "react-router-dom";

function RateBox(props) {
    return (
     <div className='flex flex-col items-center rounded-2xl bg-gray-800 h-100 w-100'>
       {props.children}
     </div>
    );
}

function ThankYou() {
    const location = useLocation();
    const { rate } = location.state || {};

    return (
        <RateBox>
            <div className="flex justify-center items-center w-48 h-32 relative top-9">
                <img src="/images/illustration-thank-you.svg" alt="NOT_FOUND"/>
            </div>
            <div className="flex justify-center items-center rounded-3xl h-10 w-48 bg-zinc-900 relative top-16">
                <p className="text-orange-500">You selected { rate } out of 5</p>
            </div>
            <div className="flex justify-center items-center h-14 w-52 text-white relative top-24">
                <h1 className="text-3xl">Thank you!</h1>
            </div>
            <div className="flex justify-center items-center w-80 text-white text-center relative top-28">
                <p>
                    We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                </p>
            </div>
            
        </RateBox>
    );

}

export default ThankYou;