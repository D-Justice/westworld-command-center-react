import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = ({hosts, selectedId, selected}) => {
  let renderHosts = (host) => {
  
    return <Host 
    key={host.id} 
    id={host.id} 
    imageUrl={host.imageUrl} 
    selected={host.id === selected ? true : false} 
    selectedId={selectedId}/>
  }
  
  return(
    <Card.Group itemsPerRow={6}>
      {hosts.map((each, index) => renderHosts(each))}
    </Card.Group>
  )
}

export default HostList
