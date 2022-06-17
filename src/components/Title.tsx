import { PropsWithChildren } from "react";
import "./Title.css";

type TitleProps = {
  color?: string;
  variant: "lg" | "md" | "sm";
};

export function Title(props: PropsWithChildren<TitleProps>) {
  const { color = "green", variant, children } = props;
  return (
    <h1 style={{ color }} className={`Title ${variant}`}>
      {children}
    </h1>
  );
}
