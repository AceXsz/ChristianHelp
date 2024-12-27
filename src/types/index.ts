export interface Template {
  id: string;
  name: string;
  description: string;
  files: TemplateFile[];
}

export interface TemplateFile {
  name: string;
  content: string;
  language: string;
}