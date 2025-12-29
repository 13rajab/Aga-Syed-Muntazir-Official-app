
export interface NavItem {
  label: string;
  href: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
