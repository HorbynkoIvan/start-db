import React, { Component } from 'react';
import Spinner from '../spinner';

const withData = (View, getData) =>
  class extends Component {
    state = {
      itemList: null,
    };

    componentDidMount() {
      getData().then(itemList => this.setState({ itemList }));
    }

    render() {
      const { data } = this.state;
      if (!data) return <Spinner />;
      return <View {...this.props} data={data} />;
    }
  };

export default withData;
