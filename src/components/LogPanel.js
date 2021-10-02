import React from 'react'
import { Segment, Button } from 'semantic-ui-react';
import { Log } from '../services/Log'

const LogPanel = ({isActivated, toggleActivationOfAll, errorLogs}) => {

  

  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {errorLogs.map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
      </pre>
      
      
      <Button
        fluid
        color={isActivated ? "green" : "red"}
        onClick={() => {
          
          toggleActivationOfAll()}}
        content={isActivated ? "DECOMISSION ALL":"ACTIVATE ALL"}
        
      />
    </Segment>
  )
}

export default LogPanel
