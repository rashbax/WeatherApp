import React from 'react'

export default function Bottom(props) {
  return (
    <>
    {props.value && (
        <div className="bottom">
        <div className="bottom__cols">
            {props.value.main && (<h3 className="bottom__head reg">{Math.round(props.value.main.feels_like)}<sup>&deg;</sup></h3>)}
            <p className="bottom__footer secondColor">Feels like</p>
        </div>
        <div className="bottom__cols">
            {props.value.wind && (<h3 className="bottom__head reg">{Math.round(props.value.wind.speed) + ' km/h'}</h3>)}
            <p className="bottom__footer secondColor">Wind</p>
        </div>
        <div className="bottom__cols">
            {props.value.main && <h3 className="bottom__head reg">{props.value.main.pressure +' Pa'}</h3>}
            <p className="bottom__footer secondColor">Pressure</p>
        </div>
    </div>
    )}
    </>
  )
}
