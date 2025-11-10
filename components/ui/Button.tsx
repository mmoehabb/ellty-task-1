import cn from "classnames";

type Props = {
  label: string;
  className?: string;
  onClick?: () => void;
};

export function Button(props: Props) {
  return (
    <button
      className={cn(
        "w-20 p-3 bg-primary text-black rounded-lg cursor-pointer hover:bg-accent focus:bg-primary",
        "text-black font-normal text-md",
        props.className,
      )}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
