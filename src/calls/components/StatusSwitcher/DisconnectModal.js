import React from 'react'
import {Dimmer, Header, Loader, Modal, Segment} from 'semantic-ui-react'

function DisconnectModal({disconnecting}){
  return (<Modal size={'mini'} open={disconnecting}>
    <Modal.Content>
      <Modal.Description>
        <Header textAlign='center'>Disconnecting...</Header>
        <Segment basic>
          <Dimmer active inverted>
            <Loader size='small'/>
          </Dimmer>
        </Segment>
      </Modal.Description>
    </Modal.Content>
  </Modal>)
}

export default DisconnectModal