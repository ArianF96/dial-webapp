import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from 'semantic-ui-react'

class MakeCallButton extends Component {
  static propTypes = {
    onCall: PropTypes.bool.isRequired,
    calling: PropTypes.bool.isRequired,
    connected: PropTypes.bool.isRequired,
    phoneService: PropTypes.object.isRequired,
    recipient: PropTypes.object.isRequired
  }

  makeCall = () => {
    this.props.phoneService.makeCall(this.props.recipient)
  }

  render () {
    return (
      <Button
        className={'flat MakeCallButton'}
        icon={'phone'}
        disabled={(this.props.onCall || this.props.calling || !this.props.connected)}
        onClick={this.makeCall}/>

    )
  }
}

export default MakeCallButton
