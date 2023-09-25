import { DateInput } from "javascript-time-ago";

export type articleProps = {
  _id: string;
  title: string;
  content: string;
  profileImage?: string;
  created_by: string;
  user_name: string;
  createdAt: Date;
  updatedAt: Date;
  borderBottom: string;
  status?: string;
};

export type mediumEditorProps = {
  style: string;
  placeholder: string;
  onChange: (value: string | null) => void;
  text: string | null;
};

export type contentActionProps = {
  id: string;
  username: string;
  status: string | undefined;
};

export type userSession = {
  userDetails?: {
    email?: string | null;
    image?: string | null;
    name?: string | null;
  };
};

export type editorProps = {
  initTitle: string | null;
  initContent: string | null;
  id: string;
};

export type storiesProps = {
  _id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  borderBottom: string;
  status?: string;
};
