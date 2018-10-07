export interface Member {
  id: number;
  name: string;
}

export interface Choose {
  isChoosed: boolean;
  choosedMemberId: number;
}

export interface Event {
  id: number;
  name: string;
  members: Array<Member & Choose>;
}