import { action, computed, observable } from 'mobx';
import { Database, IDatabase } from '../firebase/Database';
import { Utils } from './Utils';
import { Member, Choose } from '../firebase/model';
import { IChooseWheelStore, ChooseWheelStore } from './ChooseWheel/ChooseWheelStore';

export interface IAppStore {
  currentChooser: Member & Choose;
  isReady: boolean;
  chooseWheelStore: IChooseWheelStore;
  members: Array<Member & Choose>;
}

export class AppStore implements IAppStore {
  chooseWheelStore: IChooseWheelStore;
  @observable currentChooser: Member & Choose = { name : '', id: 0, isChoosed: false, choosedMemberId: 0 };
  members: Array<Member & Choose>;
  @observable isReady: boolean;

  constructor(private database: IDatabase) {
    this.init();
  }

  @action
  private async init(): Promise<void> {
    this.members = await this.database.getAllMembers();
    this.setCurrentChooser(this.getUserId());
    this.chooseWheelStore = new ChooseWheelStore(this.members, this.currentChooser, this.database);
    this.isReady = true;
  }

  @action
  private setCurrentChooser(userId: number) {
    this.currentChooser = this.members.find(o => o.id === userId);
  }

  private getUserId(): number {
    return +Utils.parseQuery(location.search).get('userId');
  }
}
