import { Assignment } from './assignment';

export const Assignments: Assignment[] = [
  {
    id: 0, type: 0, name: 'ToDo1', desc: 'Load papers into printer 1', startDate: new Date(2022, 2, 14),
    endDate: new Date(2022, 3, 1), isRepeated: true, isEnded: false, isArchived: false, status:true
  },
  {
    id: 1, type: 0, name: 'ToDo2', desc: 'Clean ink cartrige', startDate: new Date(2022, 2, 2),
    endDate: undefined, isRepeated: false, isEnded: true, isArchived: false, status: false
},
  {
    id: 2, type: 0, name: 'ToDo3', desc: 'Sharp all pencils', startDate: new Date(2022, 3, 15),
    endDate: new Date(2022, 3, 17), isRepeated: true, isEnded: false, isArchived: true, status:true
}  
];
