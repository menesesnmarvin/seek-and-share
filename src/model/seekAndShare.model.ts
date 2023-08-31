import { DateInput } from "javascript-time-ago";

export type articleProps = {
  _id: string;
  title: string;
  content: string;
  profileImage?: string;
  created_by: string;
  user_name: string;
  createdAt: Date;
  borderBottom: string;
};

export type mediumEditorProps = {
  style: string;
  placeholder: string;
  onChange: (value: string | null) => void;
};

export type deleteProps = {
  id: string;
  username: string;
};
