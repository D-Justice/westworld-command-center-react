import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import { Log } from '../services/Log'


class HostInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [
        { key: "some_area", text: "Some Area", value: "some_area" },
        { key: "another_area", text: "Another Area", value: "another_area" }
      ],
      value: '',
      host: {
        firstName: '',
        active: false
      }

    }
  }

  componentDidMount() {

    this.setState({
      options: this.props.area.map(each => { return { key: this.cleanName(each.name), text: this.cleanName(each.name), value: this.cleanName(each.name) } }),

    })

  }
  static getDerivedStateFromProps(nextProps, prevState) {



    if (nextProps.selectedHost.area !== prevState.value) {
      if (nextProps.selectedHost.firstName !== prevState.host.firstName) {
        let test = nextProps.selectedHost.area.charAt(0).toUpperCase() + nextProps.selectedHost.area.slice(1).replace('_', ' ')

        return {

          value: test,
          host: nextProps.selectedHost

        }
      }

    }
    return null
  }

  cleanName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).replace('_', ' ')
  }
  handleChange = (e, { value }) => {
    let area = this.props.area;
    let hosts = this.props.allHosts
    let areaInhabitance = hosts.filter(each => each.area === area[0].name)
    console.log('area', areaInhabitance)
    if (!(areaInhabitance.length >= area[0].limit)) {
      this.setState({ value: value }, () => this.props.updateArea(this.props.selectedHost.id, this.props.area.filter(each => {
        return this.cleanName(each.name) === this.cleanName(this.state.value)
      })))
      this.props.updateErrorLogs('notify', `${this.props.selectedHost.firstName} set in area ${this.cleanName(this.props.area[0].name)}`)
    } else {
      this.props.updateErrorLogs('error',`Too many hosts. Cannot add ${this.props.selectedHost.firstName} to ${this.cleanName(this.props.area[0].name)}`)
    }
  }

  toggle = () => {
    this.props.activatedToggle(this.props.selectedHost.id)
    
  }


  render() {
    const {
      selectedHost
    } = this.props

    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={selectedHost.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {selectedHost.firstName} | {selectedHost.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}

              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.state.host.active ? "Active" : "Decommisioned"}

                  checked={this.state.host.active ? true : false}

                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.state.value === '' ? this.cleanName(selectedHost.area) : this.state.value}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
