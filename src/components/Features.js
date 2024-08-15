import React from 'react'
import FeatureBox from './FeatureBox'
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'

export default function Features() {
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className="a-container">
<FeatureBox title="Weightlifting" image={fimage1}/>
<FeatureBox title="Specific Muscle" image={fimage2}/>
<FeatureBox title="Flex Your Muscle" image={fimage3}/>
<FeatureBox title="Cardio Exercise" image={fimage4}/>
      </div>
    </div>
  )
}
