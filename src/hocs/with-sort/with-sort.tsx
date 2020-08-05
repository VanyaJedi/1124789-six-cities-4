import * as React from "react";
import {Subtract} from "utility-types";

const SORT_TYPE_MAPPING = [
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

interface State {
  opened: boolean;
}

interface InjectingProps {
  onChangeSortType: (arg: string) => void;
}

const withSort = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithSort extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this.state = {
        opened: false,
      };
      this.handleElementClick = this.handleElementClick.bind(this);
    }

    handleElementClick() {
      this.setState((state) => {
        return {opened: !state.opened};
      });
    }

    render() {
      const {opened} = this.state;

      return <Component
        {...this.props}
        opened={opened}
        onClickHandler={this.handleElementClick}
        sortTypeMapping={SORT_TYPE_MAPPING}
      />;
    }
  }

  return WithSort;
};

export default withSort;
