import { observer } from 'mobx-react';
import * as React from 'react';
import { IChooseWheelStore } from './ChooseWheelStore';
import './ChooseWheel.css';
import wheelPeg from '../../assets/wheel_of_lunch_peg.svg';
import members from '../../assets/members.png';

export interface ChooseWheelProps {
  chooseWheelStore: IChooseWheelStore;
}

@observer
class ChooseWheel extends React.Component<ChooseWheelProps> {

  constructor(props: ChooseWheelProps) {
    super(props);
  }

  render() {
    const { spinRand, startSpin } = this.props.chooseWheelStore;

    return (
      <React.Fragment>
        <div className="container">
          <img src={members} style={this.spinWheel()} className="wheel" />
          <img src={wheelPeg} className="peg" />
        </div>
        {spinRand === 0 ? <button onClick={() => startSpin()} className="startButton">Losuj</button> : null}
      </React.Fragment>
    );
  }

  private spinWheel(): React.CSSProperties {
    // const rando = (Math.random() * 360) + 2880;
    const { spinRand } = this.props.chooseWheelStore;
    const spinRandStyle = 'rotate(' + spinRand + 'deg)';

    return {
      WebkitTransform: spinRandStyle,
      MozTransition: spinRandStyle,
      msTransform: spinRandStyle,
      transform: spinRandStyle
    };
  }
}

export default ChooseWheel;
