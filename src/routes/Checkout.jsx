import ArrowLeft from '../assets/icons/ArrowLeft';
import Star from '../assets/icons/Star';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Checkout() {
  return (
    <div className='max-w-120 m-auto overflow-x-hidden'>
      <Header />
      <div className='flex items-center mx-8 my-8 gap-4'>
        <ArrowLeft />
        <p className='text-3xl sm:text-5xl font-nohemi font-bold'>
          Reserve space
        </p>
      </div>
      <div className='mt-12 flex flex-wrap flex-col-reverse sm:flex-row mx-12 justify-around'>
        <div className='mb-8 w-full sm:w-2/5'>
          <p className=' font-nohemi font-semibold text-4xl'>Your trip</p>
          <div className='flex mt-14 justify-between'>
            <p className='text-xl font-medium font-mluvka text-opacity-70'>
              Date
            </p>
            <p className='underline text-xl font-medium font-mluvka text-opacity-70'>
              Edit
            </p>
          </div>
          <p className='mt-2 text-xl font-normal font-mluvka text-opacity-70 '>
            Dec 13-18
          </p>
          <div className='flex mt-12 justify-between'>
            <p className=' text-xl font-medium font-mluvka text-opacity-70'>
              People
            </p>
            <p className='underline text-xl font-medium font-mluvka text-opacity-70'>
              Edit
            </p>
          </div>
          <p className='mt-2 text-xl font-normal font-mluvka text-opacity-70 '>
            03
          </p>
          <button className='mt-12 text-white bg-black h-16 px-32 rounded-full text-xl font-normal font-nohemi                                   '>
            Confirm reservation
          </button>
        </div>
        <div className='mb-8 py-6 w-full sm:w-1/2 rounded-3xl border border-neutral-200'>
          <div className='flex flex-col sm:flex-row w-11/12 mx-auto'>
            <img
              className='rounded-3xl '
              src='images/laptop-table.png'
              alt='laptop on table'
            />
            <div className='mt-9 mx-4'>
              <p className='text-3xl sm:text-xl text-opacity-70 font-mluvka font-semibold'>
                Reservation
              </p>
              <p className='mt-1 text-xl w-11/12 font-normal font-mluvka sm:text-base'>
                Coworking Space: Corporate Suites Rockefeller Center in New York
                City
              </p>
              <div className='flex gap-2 mt-2'>
                <Star />
                <p className='font-bold'>4.86 . 300 Reviews</p>
              </div>
            </div>
          </div>
          <div className='h-0 mx-5 mt-12 border border-zinc-300'></div>

          <div className='w-11/12 mx-auto'>
            <p className='mt-8 font-medium text-xl font-nohemi'>
              Price Details
            </p>
            <div className='flex justify-between mt-6 '>
              <p className='underline text-xl font-mluvka font-normal text-opacity-70 leading-loose '>
                $19 X 5 people
              </p>
              <p className='text-xl font-mluvka font-normal text-opacity-70 leading-loose'>
                $95.00
              </p>
            </div>
            <div className='flex justify-between mt-4'>
              <p className='underline text-xl font-mluvka font-normal text-opacity-70 leading-loose '>
                Our fee
              </p>
              <p className='text-xl font-mluvka font-normal text-opacity-70 leading-loose ml-11'>
                $10.00
              </p>
            </div>
          </div>
          <div className='h-0 mx-5 mt-9 border border-zinc-300'></div>
          <div className='flex w-11/12 justify-between mt-6 mx-auto'>
            <p className='underline text-xl font-mluvka font-normal text-opacity-70 leading-loose '>
              Total (USD)
            </p>
            <p className='text-xl font-mluvka font-normal text-opacity-70 leading-loose ml-6'>
              $105.38
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
