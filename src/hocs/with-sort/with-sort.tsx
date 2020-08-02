import * as React from "react";
import {Subtract} from "utility-types";

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

interface State {
  opened: boolean;
}

interface InjectingProps {
  onChangeSortType: (arg: string) => void;
}

const withSort = (Component) => {

  type P = React.ComponentProps<typeof Component>;

  // Вычисляем реальные пропсы, которые нужно передать снаружи в обернутый компонент.
  // P - пропсы компонента, InjectingProps - добавляемые хоком пропсы.
  // T - пропсы, которые нужно передать в обернутый хоком компонент.
  // Условно: T = P - InjectingProps
  // Например: P = {foo: string, bar: string}, InjectingProps = {bar: string}
  // Тогда: T = {foo: string}
  type T = Subtract<P, InjectingProps>;

  class WithSort extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this.state = {
        opened: false,
      };
      this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
      this.setState((state) => {
        return {opened: !state.opened};
      });
    }

    render() {
      const {opened} = this.state;

      return <Component
        {...this.props}
        opened={opened}
        onClickHandler={this.onClickHandler}
        sortTypeMapping={sortTypeMapping}
      />;
    }
  }

  return WithSort;
};

export default withSort;
