import React, { useState, useEffect } from 'react';

const Loader = () => {
 const [visible, setVisible] = useState(false);
useEffect(()=>{
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);
},[]);

 return (
    <div >
      {visible && (
         <div className="loader-container">
         <div className="loader"></div>
       </div>
      )}
    </div>
 );
};

export default Loader;