import { observer } from 'mobx-react';
import * as React from 'react';
import { IAppStore } from './AppStore';
import ChooseWheel from './ChooseWheel/ChooseWheel';

export interface AppProps {
  appStore: IAppStore;
}

@observer
class App extends React.Component<AppProps> {

  constructor(appProps: AppProps) {
    super(appProps);
  }

  render() {
    const { currentChooser, isReady, chooseWheelStore } = this.props.appStore;

    return isReady ? (
      <React.Fragment>
        <h1>
          Witaj {currentChooser.name}
        </h1>
        <div>
          {this.renderWheel()}
        </div>
      </React.Fragment>
    ) : null;
  }

  renderWheel() {
    const { currentChooser, chooseWheelStore, members } = this.props.appStore;

    return !currentChooser.choosedMemberId ?
      (<ChooseWheel chooseWheelStore={chooseWheelStore} />) :
      (<span>Wylosowałeś {members.find(o => o.id === currentChooser.choosedMemberId).name}</span>);
  }
}

export default App;
