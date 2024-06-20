export interface Asset {
  filename?: string;
  alt?: string;
  copyright?: string;
  id?: number;
  name?: string;
  title?: string;
}

export interface SBColor{
  color:string;
}

export type TextAlign = 'left' | 'center' | 'right';