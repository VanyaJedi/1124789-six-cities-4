import React from 'react';

const sortTypeMapping = [
  {
    id: `1`,
    type: `Popular`,
    text: `Popular`
  },
  {
    id: `2`,
    type: `CostAsc`,
    text: `Price: low to high`
  },
  {
    id: `3`,
    type: `CostDesc`,
    text: `Price: high to low`
  },
  {
    id: `4`,
    type: `RateDesc`,
    text: `Top rated first`
  },
];

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
        sortTypeMapping={sortTypeMapping}
      />;
    }
  }

  return WithSort;
};

export default withSort;
