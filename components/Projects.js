export default function Projects() {
    return (
        <div className='w-full p-2 text-gray-200 border-2 border-yellow-500 rounded shadow-sm md:w-1/2'>
            <div className='pb-2 border-b border-gray-400'>
                <h1 className='px-2 text-xl font-bold'>Some Things I&apos;ve Built</h1>
            </div>
            <div className='px-2 py-3'>
                <div className='mb-3'>
                    <h2 className='text-lg text-yellow-500'>H-JarCast</h2>
                    <p className="leading-relaxed">
                        Hjarcast is a website where you can sell and buy learning materials, I built this website using
                        Laravel, React, TailwindCSS and Midtrans for payment gateway
                    </p>
                </div>
                <div className='mb-3'>
                    <h2 className='text-lg text-yellow-500'>Online Shop Pempek Lema&apos;k 179</h2>
                    <p className="leading-relaxed">
                        Website of Pempek Lema&apos;k 179 store, created using
                        Laravel, Raja Ongkir API and Midtrans for payment gateway
                    </p>
                </div>
                <div className='mb-3'>
                    <h2 className='text-lg text-yellow-500'>LetsChat</h2>
                    <p className="leading-relaxed">
                        Chat application built using Laravel, InertiaJs, React,
                        Laravel Echo, and Pusher
                    </p>
                </div>
                <div className='mb-3'>
                    <h2 className='text-lg text-yellow-500'>Cafe Cashier App</h2>
                    <p className="leading-relaxed">
                        Point of sale-based cashier application created using
                        CodeIgniter 3 framework
                    </p>
                </div>
                <div className='mb-3'>
                    <h2 className='text-lg text-yellow-500'>SPP Payment System Application</h2>
                    <p className="leading-relaxed">
                        Application made with CodeIgniter 3 framework
                    </p>
                </div>
                <div className='border-t border-gray-400'>
                    <h1 className='px-2 mt-2 text-xl font-bold'>The project is in <a href="https://www.github.com/raihanki" className='underline text-yellow-200'>github.com/raihanki</a></h1>
                </div>
            </div>
        </div>
    )
}