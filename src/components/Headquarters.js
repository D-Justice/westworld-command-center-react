import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'


class Headquarters extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Grid celled='internally'>
        <Grid.Column width={8}>

          <ColdStorage state={this.props.state} selectedId={this.props.selectedId} />

        </Grid.Column>
        <Grid.Column width={5}>
          <Details 
          area={this.props.state.areas}
            updateErrorLogs={this.props.updateErrorLogs}
            updateArea={this.props.updateArea}
            activatedToggle={this.props.activatedToggle}
            allHosts={this.props.state.hosts}
            selectedHost={this.props.state.hosts.filter(each => each.id === this.props.state.selected) || false}
          />
        </Grid.Column>
        <Grid.Column width={3}>

          <LogPanel 
          isActivated={this.props.state.buttonActivate} 
          updateErrorLogs={this.props.updateErrorLogs} 
          toggleActivationOfAll={this.props.toggleActivationOfAll} 
          errorLogs={this.props.state.errorLogs} 
          />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
