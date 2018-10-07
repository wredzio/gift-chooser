import { observable, action } from 'mobx';
import { Member, Choose } from '../../firebase/model';
import { IDatabase } from '../../firebase/Database';

export interface IChooseWheelStore {
  spinRand: number;
  startSpin(): void;
}

export class ChooseWheelStore implements IChooseWheelStore {
  @observable spinRand: number = 0;
  step: number;
  constructor(private members: Array<Member & Choose>, private currentUser: Member & Choose, private database: IDatabase) {
    this.step = 360 / members.length;
  }

  @action
  setSpinRand() {
    const choosedUser = this.choose();

    this.spinRand = (0 * 360) + 2880 - this.step / 2 - ((choosedUser - 1) * this.step);
    this.updateMembers(choosedUser);
  }

  private choose(): number {
    const activeMember = this.members.filter(o => !o.isChoosed && o.id !== this.currentUser.id).map(o => o.id);
    const rand = Math.floor(Math.random() * activeMember.length) + 1;

    return activeMember[rand - 1];
  }

  public async updateMembers(choosedUserId: number): Promise<void> {
    this.members.find(o => o.id === choosedUserId).isChoosed = true;
    this.members.find(o => o.id === this.currentUser.id).choosedMemberId = choosedUserId;

    await this.database.setEventMembers(this.members);
  }

  @action.bound
  startSpin(): void {
    this.setSpinRand();
  }
}
