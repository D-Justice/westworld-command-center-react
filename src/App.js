import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import Headquarters from './components/Headquarters'
import WestWorldMap from './components/WestworldMap'
import { Log } from './services/Log'

let baseURL = 'http://localhost:4000'

class App extends Component {

  state = {
    hosts: [],
    areas: [],
    hostsInArea: [],
    fullAreas: [],
    selected: 0,
    errorLogs: [],
    buttonActivate: false,
  }
  selectedId = (id) => {
    console.log(id)
    this.setState({
      selected: id
    })
  }
  componentDidMount() {
    fetch(`${baseURL}/hosts`)
      .then(resp => resp.json())
      .then(data => this.setState({ hosts: data }))
    fetch(`${baseURL}/areas`)
      .then(resp => resp.json())
      .then(data => this.setState({ areas: data }))
  }
  activatedToggle = (id) => {
    let host = this.state.hosts.filter(each => id === each.id)
    console.log(host)
    this.setState(prevState =>
      prevState.hosts.map(host => {
        if (host.id === id) {
          host.active = !host.active
          return host
        }
      })
    )
    this.updateErrorLogs('warn', `${!host[0].active ? 'Activated' : 'Decommisioned'} ${host[0].firstName}`)
    console.log(this.state.hosts)
  }
  updateArea = (id, area) => {
    console.log('updated', area)
    this.state.hosts.filter(each => id === each.id)



    this.setState(prevState =>
      prevState.hosts.map(host => {
        if (host.id === id) {

          host.area = area[0].name
          return host
        }
      })
    )
  }
  toggleActivationOfAll = () => {
    this.setState({
      buttonActivate: !this.state.buttonActivate
    }, () => this.setState(prevState => {
      prevState.hosts.map(host => {
        host.active = this.state.buttonActivate
        return host
      })

    }, () => this.updateErrorLogs(`${this.state.buttonActivate ? 'warn' : 'notify'}`, `${this.state.buttonActivate ? 'Activating all hosts!' : 'Decommisioning all hosts.'}`)))
    
  }
  updateErrorLogs = (type, message) => {
    this.setState(prevState => {
      return {
        errorLogs: [...prevState.errorLogs, Log[type](message)]
      }
    })
  }
  numOfHostsinArea = (area) => {
    console.log('thisone', area)
    this.setState(prevState => {
      return {
        hostsInArea: {
          ...prevState.hostsInArea,
          [area]: prevState.hostsInArea[area] + 1 || 0
        }
      }

    }, () => console.log('HostsInArea', this.state.hostsInArea))
  }

  render() {
    return (
      <Segment id='app'>
        <WestWorldMap 
        numOfHostsInArea={this.numOfHostsinArea} 
        state={this.state} 
        selectedId={this.selectedId} 
        />
        <Headquarters 
        state={this.state} 
        toggleActivationOfAll={this.toggleActivationOfAll} 
        updateErrorLogs={this.updateErrorLogs} updateArea={this.updateArea} 
        activatedToggle={this.activatedToggle} selectedId={this.selectedId} 
        />
        
      </Segment>
    )
  }
}

export default App;
