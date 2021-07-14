import Loader from "react-loader-spinner";
import React from "react";
import './styles.css';

const LoaderComp = ()=>{
    return(
        //used to display the loader when the api is fetching data
        <div className='app'>
            <Loader
            type="TailSpin"
            color="white"
            height={150}
            width={150}
            timeout={1000}
            />
       </div>
    );
}
export default LoaderComp