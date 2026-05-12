import type { ReactNode } from "react";

interface ProfessionProps {
    title: string;
    children: ReactNode;
}

export default function Profession({title, children}: ProfessionProps) {

    return (
        <div className={"flex items-end gap-x-2"}>
            <span className={"text-gray-500 dark:text-white transition-colors duration-500"}>{children}</span>
            <h1 className={"flex flex-col gap-y-2"}>
                <span className={"tracking-wide text-gray-500 dark:text-white transition-colors duration-500"}>{title}</span>
            </h1>
        </div>
    )
}