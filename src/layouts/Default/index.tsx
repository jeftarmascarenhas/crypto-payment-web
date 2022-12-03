import { Props } from "./types";

export default function Default({ children }: Props) {
  return (
    <div>
      <h1>Default</h1>
      {children}
    </div>
  );
}
