import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {

const displaySushis = props.sushis.map(sushi =>{
  return <Sushi sushi={sushi}
         onSushiClick={props.onSushiClick}/>
        }).slice(0, 4)

  return (

    <Fragment>
      <div className="belt">
          {displaySushis}
        <MoreButton sushiClick={props.handleSushiClick} />
      </div>
    </Fragment>
  )

}

export default SushiContainer
