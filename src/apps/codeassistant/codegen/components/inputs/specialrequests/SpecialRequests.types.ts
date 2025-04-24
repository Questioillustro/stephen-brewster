export interface ISpecialRequest {
  id: string;
  label: string;
  prompt: string;
}

export const SpecialRequestOptions = [
  { id: '1', label: 'No Comments', prompt: 'Do not include comments.' },
  { id: '2', label: 'Detailed Comments', prompt: 'Provide detailed comments.' },
  { id: '3', label: 'Typescript', prompt: 'Use Typescript.' },
];

export const DefaultSpecialRequestOptions = [
  { id: '1', label: 'No Comments', prompt: 'Do not include comments.' },
  { id: '3', label: 'Typescript', prompt: 'Use Typescript.' },
];
