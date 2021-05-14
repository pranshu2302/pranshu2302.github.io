import React from 'react'
import './styling/styling1.css'
import companyLogo from './1.png'
const Button = props => {
    const { clickEvent } = props;
    return <button className='button' onClick={clickEvent}>Return</button>
}
function PopUp(props) {
    return (
        <div className="oo2"> 
             <span className='gg'>&#9733;</span>
          <span className='gg'>&#9733;</span>
          <span className='gg'>&#9733;</span>
          <span className='gg'>&#9733;</span>
          <span className='gg'>&#9733;</span>

           <div class='pp'>Hi, I'm Kevin Parker, and I run Tame Impala. Some of our good songs that you could check out would be The less I know the better, Let it happen, New person - same old mistake, Guilty conscience, Love/Paranoia, etc.</div>
           <img className='rr' src={companyLogo} alt=""   />
           <div>
            <Button className = 'button' clickEvent={props.setView}/>
            </div>
        </div>
    )
}
export default PopUp;