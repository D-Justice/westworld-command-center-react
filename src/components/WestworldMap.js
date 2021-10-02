import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = ({selectedId, state, numOfHostsInArea}) => {
  let renderAreas = (area) => {
    return <Area 
    key={area.id} 
    selected={state.selected} 
    selectedId={selectedId} 
    numOfHostsInArea={numOfHostsInArea} 
    area={area.name} 
    hosts={state.hosts} />
  }
  return (
    <Segment id="map" >
      {state.areas.map((each, index) => renderAreas(each))}
    </Segment>
  )
}

export default WestworldMap
