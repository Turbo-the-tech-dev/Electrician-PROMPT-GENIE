export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  author: string;
  stars: number;
}

export interface Framework {
  id: string;
  name: string;
  description: string;
  structure: string;
}
