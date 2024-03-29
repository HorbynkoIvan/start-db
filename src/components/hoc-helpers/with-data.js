import React, { Component } from "react";
import { Spinner } from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View) =>
  class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidMount() {
      this.upDate();
    }

    upDate() {
      this.setState({
        loading: true,
        error: false,
      });
      this.props
        .getData()
        .then((data) => this.setState({ data, loading: false }))
        .catch(() => {
          this.setState({ error: true, loading: false });
        });
    }

    render() {
      const { data, loading, error } = this.state;
      if (loading) return <Spinner />;
      if (error) return <ErrorIndicator />;
      return <View {...this.props} data={data} />;
    }
  };

export default withData;
