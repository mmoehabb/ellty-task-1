"use client";

import { useMemo, useState } from "react";
import cn from "classnames";
import { Button } from "../ui/Button";
import { Checkbox } from "../ui/Checkbox";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

export function PageSelector() {
  const [selectedList, setSelectedList] = useState<Array<string>>([]);
  const allSelected = useMemo(
    () => !pages.map((page) => selectedList.includes(page)).includes(false),
    [selectedList],
  );

  return (
    <div
      className={cn(
        "flex flex-col min-w-[370px] p-5 bg-background rounded-lg",
        "border-1 border-gray-10",
        "drop-shadow-[0_8px_15px_#1414141a]",
      )}
    >
      <Checkbox
        label="All Pages"
        selected={allSelected}
        onChange={() => setSelectedList(allSelected ? [] : pages)}
      />

      <hr className="text-gray-100 my-[10px]" />

      {pages.map((page, i) => (
        <Checkbox
          key={i}
          label={page}
          selected={selectedList.includes(page)}
          onChange={() => {
            if (selectedList.includes(page))
              return setSelectedList((prev) => prev.filter((p) => p !== page));
            setSelectedList((prev) => [...prev, page]);
          }}
        />
      ))}

      <hr className="text-gray-100 my-[10px]" />

      <Button
        label="Done"
        className="w-full mt-[10px]"
        onClick={() => setSelectedList([])}
      />
    </div>
  );
}
