'use client'

import cn from "classnames";
import { useMemo, useState } from "react";
import Selected from "../../assets/selected";

type Props = {
  label: string;
  className?: string;
  onChange?: (value: boolean) => void;
  selected?: boolean,
}

export function Checkbox(props: Props) {
  const [hover, setHover] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [pressed, setPressed] = useState(false);

  const selected = useMemo(() => {
    if (props.selected === undefined) return pressed;
    return props.selected;
  }, [props.selected, pressed]);

  const onChange = () => {
    setPressed(prev => !prev);
    if (props.onChange) props.onChange(!pressed);
  }

  return (
    <div className="flex items-center justify-between w-full h-[42px] px-2">
      <span className="text-md font-normal text-black">
        {props.label}
      </span>

        <button 
          className={cn(
            "w-[23px] h-[23px] p-1 border rounded-md cursor-pointer ",
            { 
              "bg-blue-100 outline-[3px] outline-blue-10 border-1": pressing && !selected,
              "bg-blue-100 outline-[3px] outline-blue-10 border-0": pressing && selected,
              "bg-white border-gray-100 hover:border-gray-200": !selected,
              "bg-blue-100 hover:bg-blue-50 border-0": selected,
            }
          )}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          onPointerDown={() => setPressing(true)}
          onPointerUp={() => setPressing(false)}
          onClick={() => onChange()}
        >
          <Selected className={cn({
            "stroke-white": (!hover && !pressing && !selected) || selected,
            "stroke-gray-50": hover && !pressing && !selected,
            "stroke-gray-300": pressing && !selected,
          })}/>
        </button>
    </div>
  );
}
