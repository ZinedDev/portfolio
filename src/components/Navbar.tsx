import {navbarData, copyRightIcon} from "../assets";

export default function Navbar({id}: { id: string }) {
    return (
        <div
            className={"w-17.5 h-full fixed left-0 top-0 flex flex-col justify-between border-r-2 bg-amber-100 dark:bg-zinc-700 border-yellow-600 transition-colors duration-500 px-4 py-10 max-xl:py-6 z-10 shadow-2xl"}>
            <a href="/#home">
                <span className="text-center text-xl font-semiboldbold text-red-600 dark:text-red-500 transition-colors duration-500">D.</span>
                <span className="text-center block rotate-90 origin-bottom text-[12px] font-semibold dark:text-gray-200 transition-colors duration-500">Waßmuth</span>
            </a>
            <div className={"flex flex-col gap-y-3 max-xl:gap-y-1 max-sm:gap-y-2 max-xs:gap-y-0"}>
                {navbarData.map((data, i) => (
                    <a key={i} href={`/#${data.id}`} className={"group flex flex-col items-center gap-y-2"}>
                        <span className={`text-2xl group-hover:scale-125 max-xl:group-hover:scale-115 max-xs:group-hover:scale-100 transition-all
                        ${data.id === id ? "text-red-500 scale-125 max-xl:scale-100 max-xs:scale-80" : "text-yellow-600 scale-100 max-xl:scale-90 max-xs:scale-70"}`}>{data.icon}</span>
                        <span className={`text-[10px] tracking-wide  opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all dark:group-hover:text-gray-200 duration-300 text-center
                        ${i % 2 === 0 ? "translate-x-2" : "-translate-x-2"} ${data.id === id && "translate-x-0 opacity-100 dark:text-gray-200 transition-all"}`}>{data.name}</span>
                    </a>
                ))}
            </div>
            <p className={"flex items-center justify-center text-[13px] max-xs:text-[11px] text-gray-500 mt-6"}>
                <span
                    className={"absolute left-2/3 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200 transition-colors duration-500"}>{copyRightIcon}{new Date().getFullYear()}</span>
            </p>
        </div>
    )
}