
export interface Assignment {
  readonly id: number;
  readonly type: number;
  readonly name: string;
  readonly desc: string;
  readonly startDate: Date;
  endDate?: Date;
  isRepeated: boolean;
  isEnded: boolean;
  isArchived: boolean;
  status: boolean;
}
