import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'

const Details = ({activatedToggle, area, selectedHost, updateArea, allHosts, updateErrorLogs}) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.
  
  const renderSomething = () => (selectedHost[0] ? null : <Image size='medium' src={Images.westworldLogo}/>)
  const renderHostInfo = () => (selectedHost[0] ? <HostInfo area={area} updateErrorLogs={updateErrorLogs} updateArea={updateArea} activatedToggle={activatedToggle} allHosts={allHosts} selectedHost={selectedHost[0]}/> : null)
  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
      {renderHostInfo()}
    </Segment>
  )
}

export default Details
