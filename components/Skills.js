export default function Skills() {
    return (
        <div className="flex flex-col items-center justify-center w-full font-semibold text-gray-200 pt-14">
            <h1 className='text-3xl text-center uppercase md:text-left'>Here are a few technologies I’ve been learning</h1>
            <div className="w-48 my-10 border-2 border-gray-300" />
            <div className='flex flex-wrap justify-center gap-3'>
                <div className='px-3 py-2 text-gray-900 transition duration-75 bg-yellow-500 border rounded shadow-sm hover:bg-yellow-700'>PHP</div>
                <div className='px-3 py-2 text-gray-900 transition duration-75 bg-yellow-500 border rounded shadow-sm hover:bg-yellow-700'>Laravel</div>
                <div className='px-3 py-2 text-gray-900 transition duration-75 bg-yellow-500 border rounded shadow-sm hover:bg-yellow-700'>JavaScript (ES6+)</div>
                <div className='px-3 py-2 text-gray-900 transition duration-75 bg-yellow-500 border rounded shadow-sm hover:bg-yellow-700'>React</div>
                <div className='px-3 py-2 text-gray-900 transition duration-75 bg-yellow-500 border rounded shadow-sm hover:bg-yellow-700'>NodeJS</div>
                <div className='px-3 py-2 text-gray-900 transition duration-75 bg-yellow-500 border rounded shadow-sm hover:bg-yellow-700'>Express</div>
            </div>
            <div className="w-48 my-10 border-2 border-gray-300" />
        </div>
    )
}