export interface SvgItem {
  id: string;
  name: string;
  description: string;
  category: string;
  content: string;
  uploadDate: string;
  fileSize: number;
}

export interface SvgFormData {
  name: string;
  description: string;
  category: string;
  file: File | null;
}
