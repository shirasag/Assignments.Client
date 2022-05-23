
export class Assignment {
  public readonly id?: number;
  public type?: number;
  public name?: string;
  public desc?: string;
  public startDate?: Date;
  public endDate?: Date;
  public isRepeated?: boolean;
  public isEnded?: boolean;
  public isArchived?: boolean;
  public status?: number;

  public constructor(init?: Partial<Assignment>) { Object.assign(this, init); }
}

export interface Type {
  name: string; 
  code: string;
  
}

export const types: Type[] = [{ name: 'Personal', code: '0' }, { name: 'Work', code: '1' }, { name: 'Study' ,code: '2' }];


export interface Repeat {
  name: string;
  code: string;

}

export const repeatition: Repeat[] = [{ name: 'Yes', code: '0' }, { name: 'No', code: '1' }];

export type Status ={
  name: string;
  code: number;

}

export const status: Status[] = [{ name: 'Active', code: 0 }, { name: 'Done', code: 1 }];
