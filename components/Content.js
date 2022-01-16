import Link from "next/link";

export default function Content() {
    return (
        <div className="flex flex-col items-start justify-center w-full min-h-full p-5 bg-gray-800 rounded-lg shadow-md">
            <div className="px-5 md:px-14">
                <h2 className="text-2xl font-thin text-center text-gray-200 uppercase md:text-left">Hi THERE</h2>
                <h1 className="py-3 text-5xl font-bold text-center text-gray-200 md:text-left">I am <span className="text-yellow-500">Raihan Khoerul Imam</span></h1>
                <p className="py-3 text-lg leading-relaxed text-center text-gray-200 md:text-left">
                    I am a student in Telkom University and living in Bandung, Indonesia. I started codding at age of 16, the first programming language that i learned is C++ but for some reason i stop learning that and try to learn PHP, that&apos;s the first time i interested about web development. I am interested to be a back-end developer. I enjoy building web application using laravel and reactjs. I do not have any experience about working as a web developer, maybe if you need a junior web developer you can contact me.
                </p>
            </div>
        </div>
    )
}