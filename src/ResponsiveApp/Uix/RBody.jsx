import React, { useState } from 'react'

const currentUTCDate = new Date()

export default function RBody(props) {

  const [minutes, setMinutes] = useState(currentUTCDate.getMinutes())

  
function incMinutes(){
  setMinutes(minutes +1)
}

setTimeout(incMinutes, 60000);

function getMins(){
  return minutes >= 60 ? '00' : minutes < 10 ? '0'+ minutes : minutes
}

  // console.log(props.value.weather && props.value.weather[0].icon);
  return (
    <>
    <div className="body__header">
      <div className="header__cols">
        <div className="header__items">
          <div className="header__icon">
            <img src={props.value.weather &&("http://openweathermap.org/img/w/" + props.value.weather[0].icon + '.png' )} alt="" />
          </div>
          <div className="items__body">
            <h3 className='reg'>Today</h3>
            {props.value.timezone && (
              <h3 className='clock secondColor'>{currentUTCDate.getUTCHours() + props.value.timezone/3600 === 24 ? '0'+':'+ getMins() : currentUTCDate.getUTCHours() + props.value.timezone/3600 + ':'+ getMins()}</h3>

            )}
            
          </div>
        </div>
      </div>
      {props.value.main && (<div className="header__cols temp">{Math.round(props.value.main.temp) }<sup>&deg;</sup></div>)}
      {props.value && <div className="header__cols city secondColor">{props.value.name}</div>}
    </div>
    </>
  )
}
