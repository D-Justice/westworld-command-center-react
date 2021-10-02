import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'

const ColdStorage = ({ state, selectedId }) => (

  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>
      
     
        <HostList hosts={state.hosts.filter(each => {
          if(each.active === false) {
            return each
          }})} selectedId={selectedId} selected={state.selected} />

    </Segment>
  </Segment.Group>
)

export default ColdStorage
