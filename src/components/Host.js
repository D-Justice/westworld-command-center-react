import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'
import Details from './Details'

function Host({ id, imageUrl, selectedId, selected}){
    let chosen = selected ? 'selected host' : 'host'
  return (
    <div>
    <Card
      className={chosen}

      onClick={() => selectedId(id)}
      image={imageUrl}
      raised
    />
    
    </div>
  )
}

export default Host
