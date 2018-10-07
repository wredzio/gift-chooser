import * as firebase from 'firebase/app';
import { Member, Choose } from './model';

export interface IDatabase {
  getAllMembers(): Promise<Array<Member & Choose>>;
  setEventMembers(members: Array<Member & Choose>): void;
}

export class Database implements IDatabase {
  private firebaseDatabae = firebase.database();

  public async getAllMembers(): Promise<Array<Member & Choose>> {
    return this.firebaseDatabae.ref('members').once('value').then((o) => o.val());
  }

  public async setEventMembers(members: Array<Member & Choose>) {
    this.firebaseDatabae.ref('events/members').set(members);
    this.firebaseDatabae.ref('members').set(members);
  }
}