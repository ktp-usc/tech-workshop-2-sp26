import Image from 'next/image';
import ktp from '@/public/ktp.png';

export default function Page() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 p-4 sm:p-6'>
            <h1 className='text-2xl sm:text-3xl font-bold text-center'>
                Image Testing
            </h1>

            <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-8'>
                <Image
                    src={ktp}
                    alt='KTP logo'
                    className='rounded-lg w-32 sm:w-40 md:w-48 lg:w-56 h-auto'
                />

                <Image
                    src='/ktp.png'
                    alt='KTP logo'
                    width={200}
                    height={200}
                    className='rounded-lg w-32 sm:w-40 md:w-48 lg:w-56 h-auto'
                />

                <Image
                    src='https://images.unsplash.com/photo-1759675739458-6e5a4a60a117'
                    alt='serene night sky'
                    width={900}
                    height={600}
                    className='rounded-lg w-full sm:w-100 md:w-125 lg:w-150 h-auto'
                />
            </div>
        </div>
    );
}
