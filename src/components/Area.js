import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList';
import Host from './Host'
let count = 0
const Area = ({id, area, hosts, selected, selectedId, numOfHostsInArea}) => {
  

  const renderHosts = (host) => {
    
    if(host.area === area && host.active) {

      return (<Host key={host.id} id={host.id} imageUrl={host.imageUrl} selected={host.id === selected ? true : false} selectedId={selectedId} />)
    }
    
  }

  return(
  <div className='area' id={area}>
    <h3 className='labels'>{area.charAt(0).toUpperCase() + area.slice(1).replace('_', ' ')}</h3>
    
    {hosts.map(each => renderHosts(each))}

  </div>
  )

  }

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
