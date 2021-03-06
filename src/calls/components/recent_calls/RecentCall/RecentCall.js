import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Icon, Item } from "semantic-ui-react";


import styles from "../RecentCallList/RecentCall.module.css";

class RecentCall extends Component {
  static propTypes = {
    recentCall: PropTypes.object.isRequired
  };

  render() {
    const {
      name,
      phoneNumber,
      startTime,
      endTime,
      missed,
      incoming
    } = this.props.recentCall;

    const color = missed ? "red" : "green";

    const printableDate = moment(startTime).calendar();
    const duration = moment.duration(moment(endTime).diff(moment(startTime)));

    return (
      <Item className={"padded-item RecentCall"}>
        <Icon
          name="phone"
          size={"large"}
          color={"grey"}
          className={"ui avatar"}
        />

        <Item.Content>
          <Item.Header className={styles.ItemHeader}>{name}</Item.Header>
          <Item.Description className={styles.Content}>
            {incoming ? (
              <Icon name={"arrow down"} color={color} />
            ) : (
              <Icon name={"arrow up"} color={color} />
            )} {phoneNumber ? `(${phoneNumber})` : ""}
          </Item.Description>
          <Item.Extra className={styles.ExtraContent}>
            <span className="date">
              {printableDate} {!missed? (`- ${duration.humanize()}`) : ""}
            </span>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default RecentCall;
