import { useState, useEffect } from "react";
import Heading from "./sub/Heading.tsx";
import {motion} from "framer-motion";

export default function Contact() {
    // State for form data to handle inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    // State to store the submission result message (success or error)
    const [result, setResult] = useState("");
    // State to track if the form is currently being submitted
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Load saved form data from localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem("contact_form_draft");
        if (savedData) {
            try {
                setFormData(JSON.parse(savedData));
            } catch (error) {
                console.error("Error loading form draft:", error);
            }
        }
    }, []);

    // Save form data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("contact_form_draft", JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent the default browser form submission behavior (page reload)
        event.preventDefault();
        // Set submitting state to true to disable the button and show loading status
        setIsSubmitting(true);
        // Set initial feedback message
        setResult("Sending....");

        // Create a FormData object from our state
        const dataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            dataToSend.append(key, value);
        });

        // Add your Web3Forms access key here for authentication
        dataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            // Send a POST request to Web3Forms API with the form data
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: dataToSend
            });

            // Parse the JSON response from the server
            const data = await response.json();

            if (data.success) {
                // If submission was successful, update feedback message and reset the form
                setResult("Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
                localStorage.removeItem("contact_form_draft");
            } else {
                // If the API returned an error, log it and display the error message
                console.log("Error", data);
                setResult(data.message || "Submission failed.");
            }
        } catch (error) {
            // Catch any network or unexpected errors
            console.log("Error", error);
            setResult("An error occurred. Please try again.");
        } finally {
            // Always set isSubmitting back to false when finished (success or failure)
            setIsSubmitting(false);
        }
    };

    return (
        <div className={"min-h-screen flex flex-col items-center justify-center"}>
            <Heading text={"Get in touch!"}/>
            <div className={"w-full h-full flex max-lg:flex-col items-center justify-center max-lg:justify-center gap-x-20 max-sm:gap-x-0 gap-y-20"}>
                <motion.div
                initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: .5, type: "spring", stiffness: 50}}
                viewport={{once: false}}
                className={"max-sm:hidden scale-125"}
                >
                    <img
                        src={"/contact-1.png"}
                        alt={"Contact Image"}
                        width={400}
                        height={400}
                        className={"w-100 rounded-md opacity-80"}
                    />
                </motion.div>
                <motion.form
                    initial={{opacity: 0, x: window.innerWidth >= 768 ? 200 : 0, y: window.innerWidth < 768 ? 100 : 0}}
                    whileInView={{opacity: 1, x: 0, y: 0}}
                    transition={{duration: 1, type: "spring", stiffness: window.innerWidth > 768 ? 100 : 50}}
                    viewport={{once: false}}
                    className={"w-150 max-lg:w-100 max-sm:w-full flex flex-col gap-3 relative"}
                    onSubmit={onSubmit}
                >
                    <div className={"w-full flex max-lg:flex-col gap-x-3 max-lg:gap-y-3"}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            className={"w-full border border-yellow-600 rounded-md bg-amber-100 dark:bg-zinc-600 px-4 py-2 text-sm tracking-wider text-gray-600 dark:text-white outline-none transition-colors duration-500"}
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className={"w-full border border-yellow-600 rounded-md bg-amber-100 dark:bg-zinc-600 px-4 py-2 text-sm tracking-wider text-gray-600 dark:text-white outline-none transition-colors duration-500"}
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        className={"w-full border border-yellow-600 rounded-md px-4 py-2 text-sm tracking-wider bg-amber-100 dark:bg-zinc-600 text-gray-600 dark:text-white outline-none  transition-colors duration-500"}
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={"max-h-62.5 min-h-37.5 border border-yellow-600 rounded-md px-4 py-2 text-sm tracking-wide bg-amber-100 dark:bg-zinc-600 text-gray-600 dark:text-white outline-none transition-colors duration-500"}
                    ></textarea>
                    <input
                        type="submit"
                        value={isSubmitting ? "Sending..." : "Send Message"}
                        disabled={isSubmitting}
                        className={"w-full border border-yellow-600 rounded-md bg-amber-400 px-4 hover:bg-amber-500 py-2 text-sm tracking-wider text-white outline-none transition-colors cursor-pointer disabled:bg-yellow-800 disabled:cursor-not-allowed"}
                    />
                    {result && (
                        <p className={`absolute top-full left-0 w-full mt-4 text-center text-sm ${result.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                            {result}
                        </p>
                    )}
                </motion.form>
            </div>
        </div>
    )
}