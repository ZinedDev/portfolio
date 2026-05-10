import type { ReactNode } from "react";

interface ProfessionProps {
    title: string;
    children: ReactNode;
}

export default function Profession({title, children}: ProfessionProps) {

    return (
        <div className={"flex items-end gap-x-3"}>
            <span className={"text-4xl max-lg:text-2xl text-gray-500 dark:text-white transition-colors duration-500"}>{children}</span>
            <h1 className={"flex flex-col gap-y-2"}>
                <span className={"text-sm tracking-wide text-gray-500 dark:text-white transition-colors duration-500"}>{title}</span>
            </h1>
        </div>
    )
}