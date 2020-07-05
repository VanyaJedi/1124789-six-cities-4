import React from 'react';


const withSort = (Component) => {
  class WithSort extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        opened: false,
      };
      this._onClickHandler = this._onClickHandler.bind(this);
    }

    _onClickHandler() {
      this.setState((state) => {
        return {opened: !state.opened};
      });
    }

    render() {
      const {opened} = this.state;

      return <Component
        {...this.props}
        opened={opened}
        onClickHandler={this._onClickHandler}
      />;
    }
  }

  return WithSort;
};

export default withSort;
