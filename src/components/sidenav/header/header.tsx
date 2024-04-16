import Link from 'next/link';

const Header = () => {
    return (
        <nav className='fixed top-0 left-0 z-50 w-full h-20 bg-white border-b border-gray-200'>
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-start'>
                        <Link href='/' className='flex ml-2 md:mr-24'>
                            <span className='self-center text-xl font-semibold sm:text-2xl'>
                                EZProject
                            </span>
                        </Link>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header