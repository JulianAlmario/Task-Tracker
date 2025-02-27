import {Check} from 'lucide-react';

export function Logo(){
    return (

            <div className='border-4 border-blue-700 border-dashed bg-black rounded-full'>
                <div className=' relative rounded-full size-24 object-contain mx-auto my-auto bg-blue-700 flex justify-center items-center border-4 border-black'>
               <Check className='absolute w-3/4 text-white size-96 stroke-black' strokeWidth={4}/>
               <Check className='absolute w-3/4 text-white size-96 ' strokeWidth={2}/>
            </div>
            </div>
    );
}