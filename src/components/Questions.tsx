import Heading from "./sub/Heading.tsx";
import Question from "./sub/Question.tsx";
import {questions} from "../assets";

export default function Questions() {
    return (
        <div className={"min-h-screen flex flex-col items-center justify-center"}>
            <Heading text={"Questions & Answers"}/>
            <div>
                <ul className={"flex flex-col gap-y-2"}>
                    {questions.map((question, i) => (
                        <Question key={i} data={question} index={i}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}