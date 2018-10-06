import { observer } from 'mobx-react';
import * as React from 'react';
import { IAppStore } from './AppStore';

export interface AppProps {
  appStore: IAppStore;
}

@observer
class App extends React.Component<AppProps> {

  constructor(appProps: AppProps) {
    super(appProps);
  }

  render() {
    const { appStore } = this.props;

    return (
      <div>
        aaa
      </div>
    );
  }
}

export default App;
