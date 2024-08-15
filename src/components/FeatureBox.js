import React from 'react'

export default function FeatureBox(props) {
  return (
    
      <div className="a-box">
        <div className="a-b-image">
            <img src={props.image} alt="" />
        </div>
<div className="a-b-text">
    <h2>{props.title}</h2>
    <p>We provide each and every thing to our client </p>
</div>
      </div>
    
  )
}
