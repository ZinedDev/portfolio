export default function Heading({text}:{text: string}) {
    return (
        <h1 className={"text-3xl max-sm:text-2xl font-bold text-gray-600 dark:text-gray-400 transition-colors duration-500 mb-14 self-start"}>{text}</h1>
    )
}