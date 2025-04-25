export interface ISpecialRequest {
  id: string;
  label: string;
  prompt: string;
}

export const SpecialRequestOptions = [
  { id: '1', label: 'No Comments', prompt: 'Do not include comments.' },
  { id: '2', label: 'Detailed Comments', prompt: 'Provide detailed comments.' },
  { id: '3', label: 'Typescript', prompt: 'Use Typescript.' },
  {
    id: '4',
    label: 'Separate Files',
    prompt: 'Follow best practices for separation of code into styles and component files.',
  },
];

export const DefaultSpecialRequestOptions = [
  { id: '1', label: 'No Comments', prompt: 'Do not include comments.' },
  { id: '3', label: 'Typescript', prompt: 'Use Typescript.' },
  {
    id: '4',
    label: 'Separate Files',
    prompt: 'Follow best practices for separation of code into styles and component files.',
  },
];
