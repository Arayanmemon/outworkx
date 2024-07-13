import Footer from '../components/Footer';
import Header from '../components/Header';
import ArrowLeft from '../assets/icons/ArrowLeft';
import Booking from '../components/Booking';

export default function Bookinghistory() {
  return (
    <div className='max-w-120 m-auto overflow-x-hidden'>
      <Header />
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex items-center mx-8 my-8 gap-4'>
          <ArrowLeft />
          <p className='text-3xl sm:text-5xl font-nohemi font-bold'>
            Booking History
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-y-2'>
          <input
            type='search'
            className='w-11/12 sm:w-1/2 mx-auto border sm:mx-1 px-3 py-4 sm:py-2 rounded-md border-black'
            name=''
            placeholder='Choose'
            id=''
          />
          <input
            type='search'
            className='w-11/12 sm:w-1/2 mx-auto border sm:mx-1 px-3 py-4 sm:py-2 rounded-md border-black'
            name=''
            placeholder='Search'
            id=''
          />
        </div>
      </div>

      <div className='flex justify-center mt-8 sm:mt-4'>
        <table>
          <tbody>
            <tr className='flex gap-4 mx-4 sm:mx-0'>
              <th className='text-xl sm:text-base w-14'>Image</th>
              <th className='text-xl sm:text-base w-52'>Space Name</th>
              <th className='hidden sm:block w-36'>Location</th>
              <th className='hidden sm:block w-36'>Access Hours</th>
              <th className='hidden sm:block w-36'>Reservation Date</th>
              <th className='hidden sm:block w-28'>No of People</th>
              <th className='hidden sm:block w-24'>Price/Day</th>
              <th className='hidden sm:block w-16'>Table</th>
              <th className='hidden sm:block w-16'>Guests</th>
            </tr>

            <Booking img='/images/hero1.png' />
            <Booking img='/images/hero2.png' />
            <Booking img='/images/hero3.png' />
            <Booking img='/images/hero4.png' />
            <Booking img='/images/hero1.png' />
            <Booking img='/images/hero2.png' />
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
