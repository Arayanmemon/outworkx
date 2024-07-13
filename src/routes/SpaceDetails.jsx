import Header from '../components/Header';
import { FaStar, FaRegCalendar } from 'react-icons/fa';
import { IoIosWifi } from 'react-icons/io';
import { TbClockHour8 } from 'react-icons/tb';
import { BsChatLeftText } from 'react-icons/bs';

import {
  MdAirlineSeatReclineExtra,
  MdCleaningServices,
  MdRoundedCorner,
  MdPets
} from 'react-icons/md';

import { LiaSmokingBanSolid } from 'react-icons/lia';
import { TfiSpray } from 'react-icons/tfi';
import { IoKeyOutline, IoSnow } from 'react-icons/io5';
import { VscTag } from 'react-icons/vsc';
import Footer from '../components/Footer';

function Page2() {
  return (
    <>
      <div className='max-w-120 m-auto overflow-x-hidden'>
        <div className='p-4'>
          <Header />
          <div className='flex flex-col sm:flex-row justify-center sm:justify-around gap-2'>
            <div>
              <div className='w-full h-auto bg-white rounded-4xl'>
                <img className='' src='/images/hero1.png' alt='' />
              </div>
              <div className='hidden sm:block w-40 bg-black rounded-3xl z-1 relative bottom-20 left-96 hover:cursor-pointer'>
                <h4 className='text-center py-3 text-white font-bold'>
                  Show All Photos
                </h4>
              </div>
            </div>
            <div className='flex flex-col'>
              <img className='mb-4 w-full h-auto' src='/images/hero2.png' />
              <img className='w-full h-auto ' src='/images/hero3.png' />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 mt-9'>
            <div className='flex-col'>
              <p className='w-63 text-4xl text-black sm:text-5xl font-medium font-nohemi'>
                Coworking Space: Corporate Suites Rockefeller Center in New York
                City
              </p>
              <div className='flex gap-2 my-6'>
                <FaStar size={31} className='ml-2' />
                <p className='text-xl font-bold'>4.86 . 300 Reviews</p>
              </div>

              <div className='my-7 flex flex-wrap gap-x-64 items-center w-2/3 sm:w-100 h-auto border-t-2 border-neutral-200'>
                <p className='mt-7 text-start text-2xl font-bold '>
                  1 GUEST . 1 Table
                </p>
                <p className='mt-7'>Access Hours : 9:00am - 6:00pm</p>
              </div>
              <div className='w-2/3 sm:w-100 h-auto border-t-2 border-neutral-200'>
                <p className='text-start font-bold text-2xl my-4'>
                  Coworking Space Amenities
                </p>
                <div className='flex flex-wrap my-8 gap-8'>
                  <div className='flex gap-4'>
                    <IoIosWifi size={24} color='black' />
                    <p>High-Speed WiFi</p>
                  </div>
                  <div className='flex gap-4'>
                    <IoSnow size={24} color='black' />
                    <p>Air Conditioning </p>
                  </div>
                  <div className='flex gap-4'>
                    <MdAirlineSeatReclineExtra size={24} color='black' />
                    <p>Lounge / Chill-out Area </p>
                  </div>
                </div>
              </div>
              <div className='w-11/12 sm:w-100 h-auto border-t-2 border-neutral-200'>
                <p className='text-start font-bold text-2xl mt-8'>
                  Workspace Rules
                </p>
                <div className='flex flex-wrap my-8 gap-8'>
                  <div className='flex gap-4'>
                    <LiaSmokingBanSolid size={24} color='black' />
                    <p>No Smoking </p>
                  </div>
                  <div className='flex gap-4'>
                    <MdPets size={24} color='black' />
                    <p> No Pets Allowed </p>
                  </div>
                  <div className='flex gap-4'>
                    <MdRoundedCorner size={24} color='black' />
                    <p>Respect Boundaries </p>
                  </div>
                  <div className='flex gap-4'>
                    <MdCleaningServices size={24} color='black' />
                    <p>Keep Workspace Clean </p>
                  </div>
                </div>
              </div>

              <div className='my-10 w-11/12 h-auto border-t-2 border-neutral-200'>
                <h2 className='text-start text-xl font-medium mt-8'>
                  About Place
                </h2>
                <div>
                  <p className='mt-1 text-start text-lg'>
                    1180 Avenue of the Americas at 46th Street is a world class
                    location and prominent business address with fantastic
                    amenities, including 24/7 access and security, lobby
                    attendants, imposing on-the-avenue entrance and modern lobby
                    with multiple high speed elevators. It is easily accessible
                    from all major transportation hubs, including Penn Station.
                    ...
                  </p>
                </div>
                <div className='flex text-lg font-bold text-start hover:cursor-pointer'>
                  Show More
                </div>
              </div>

              <div className='w-11/12 h-auto border-t-2 border-neutral-200'>
                <div className='flex'>
                  <FaStar size={31} className='mt-6' />
                  <p className='mt-7 ml-2 text-xl font-bold '>
                    4.86 . 300 Reviews
                  </p>
                </div>
                <p className='flex mt-7'>overall rating</p>
                <div className='flex flex-wrap gap-24 mt-4 font-bold'>
                  <div>
                    <div className='flex gap-2'>
                      <p>5</p>
                      <div className='mt-2.5 w-40 h-0 border border-black'></div>
                    </div>
                    <div className='flex gap-2'>
                      <p>4</p>
                      <div className='mt-2.5 w-40 h-0 border border-zinc-300'></div>
                    </div>
                    <div className='flex gap-2'>
                      <p>3</p>
                      <div className='mt-2.5 w-40 h-0 border border-zinc-300'></div>
                    </div>
                    <div className='flex gap-2'>
                      <p>2</p>
                      <div className='mt-2.5 w-40 h-0 border border-zinc-300'></div>
                    </div>
                    <div className='flex gap-2'>
                      <p>1</p>
                      <div className='mt-2.5 w-40 h-0 border border-zinc-300'></div>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className='w-0 h-28 border border-zinc-300'></div>
                    <div className='flex-col gap-4 ml-6'>
                      <p className='-mt-2.5'>Cleanliness</p>
                      <p className='text-start mt-2.5 '>5.0</p>
                      <TfiSpray size={23} color='black' className='mt-8' />
                    </div>
                  </div>

                  <div className='flex'>
                    <div className='w-0 h-28 border border-zinc-300'></div>
                    <div className='flex-col gap-4 ml-6'>
                      <p className='-mt-2.5'>Accuracy</p>
                      <p className='text-start mt-2.5'>5.0</p>
                      <TbClockHour8 size={23} color='black' className='mt-8' />
                    </div>
                  </div>

                  <div className='flex'>
                    <div className='w-0 h-28 border border-zinc-300'></div>
                    <div className='flex-col gap-4 ml-6'>
                      <p className='-mt-2.5'>Check-in </p>
                      <p className='text-start mt-2.5'>5.0</p>
                      <IoKeyOutline size={23} color='black' className='mt-8' />
                    </div>
                  </div>

                  <div className='flex'>
                    <div className='w-0 h-28 border border-zinc-300'></div>
                    <div className='flex-col gap-4 ml-6'>
                      <p className='-mt-2.5'>Communication</p>
                      <p className='text-start mt-2.5'>5.0</p>
                      <BsChatLeftText
                        size={23}
                        color='black'
                        className='mt-8'
                      />
                    </div>
                  </div>

                  <div className='flex'>
                    <div className='w-0 h-28 border border-zinc-300'></div>
                    <div className='flex-col gap-4 ml-6'>
                      <p className='-mt-2.5'>Value </p>
                      <p className='text-start mt-2.5'>5.0</p>
                      <VscTag size={23} color='black' className='mt-8' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-11/12 h-auto '>
                <div className='my-20'>
                  <div className='flex gap-x-36 flex-wrap'>
                    <div className='flex gap-3'>
                      <div className='w-24 sm:w-16 h-16 bg-zinc-100 rounded-full' />
                      <div className='gap-4'>
                        <h3 className='text-start font-bold mt-3'>Aslam</h3>
                        <p className='text-start text-xs'>
                          Hyderabad, Pakistan
                        </p>
                        <div className='flex gap-1'>
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <h4 className='-mt-1 font-bold'> . October 22</h4>
                        </div>
                        <div className='mb-8'>
                          <p className='text-start'>
                            Beautiful setting with clean and comfty rooms. Great
                            price too. <br /> would recommend.
                          </p>
                          <div className='mt-8 font-bold hover:cursor-pointer flex underline underline-offset-1'>
                            Show More
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flex gap-3'>
                      <div className='w-24 sm:w-16 h-16 bg-zinc-100 rounded-full' />
                      <div className='gap-4'>
                        <h3 className='text-start font-bold mt-3'>Aslam</h3>
                        <p className='text-start text-xs'>
                          Hyderabad, Pakistan
                        </p>
                        <div className='flex gap-1'>
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <h4 className='-mt-1 font-bold'> . October 22</h4>
                        </div>
                        <div className='mb-8'>
                          <p className='text-start'>
                            Beautiful setting with clean and comfty rooms. Great
                            price too. <br /> would recommend.
                          </p>
                          <div className='mt-8 font-bold hover:cursor-pointer flex underline underline-offset-1'>
                            Show More
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex gap-x-36 flex-wrap'>
                    <div className='flex gap-3'>
                      <div className='w-24 sm:w-16 h-16 bg-zinc-100 rounded-full' />
                      <div className='gap-4'>
                        <h3 className='text-start font-bold mt-3'>Aslam</h3>
                        <p className='text-start text-xs'>
                          Hyderabad, Pakistan
                        </p>
                        <div className='flex gap-1'>
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <h4 className='-mt-1 font-bold'> . October 22</h4>
                        </div>
                        <div className='mb-8'>
                          <p className='text-start'>
                            Beautiful setting with clean and comfty rooms. Great
                            price too. <br /> would recommend.
                          </p>
                          <div className='mt-8 font-bold hover:cursor-pointer flex underline underline-offset-1'>
                            Show More
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex gap-3'>
                      <div className='w-24 sm:w-16 h-16 bg-zinc-100 rounded-full' />
                      <div className='gap-4'>
                        <h3 className='text-start font-bold mt-3'>Aslam</h3>
                        <p className='text-start text-xs'>
                          Hyderabad, Pakistan
                        </p>
                        <div className='flex gap-1'>
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <FaStar size={12} color='black' />
                          <h4 className='-mt-1 font-bold'> . October 22</h4>
                        </div>
                        <div className='mb-8'>
                          <p className='text-start'>
                            Beautiful setting with clean and comfty rooms. Great
                            price too. <br /> would recommend.
                          </p>
                          <div className='mt-8 font-bold hover:cursor-pointer flex underline underline-offset-1'>
                            Show More
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mx-auto py-3 w-48 border border-zinc-300 text-center rounded-3xl'>
                  <h2 className='font-bold'>Show More Reviews</h2>
                </div>
              </div>

              <div className='mt-12 w-11/12 h-auto border-t-2 border-neutral-200'>
                <h3 className='mt-12 flex text-start font-bold text-xl'>Map</h3>
                <iframe
                  className='block sm:hidden mt-5 rounded-xl'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28831.24333756935!2d68.30623202821751!3d25.407976429603178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7a040a2965e3%3A0xa8277e9c26fa1449!2sHyderabad%20City%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702888340296!5m2!1sen!2s'
                  width='380'
                  height='380'
                  allowfullscreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
                <iframe
                  className='hidden sm:block mt-5 rounded-xl'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28831.24333756935!2d68.30623202821751!3d25.407976429603178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7a040a2965e3%3A0xa8277e9c26fa1449!2sHyderabad%20City%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702888340296!5m2!1sen!2s'
                  width='1280'
                  height='700'
                  allowfullscreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
              <div className='mt-12 w-11/12 h-0 border border-neutral-200'></div>
            </div>

            <div className='w-80 sm:-ml-96 flex-col gap-2 h-96 bg-white rounded-2xl shadow border border-neutral-200'>
              <h2 className='text-black font-bold ml-6 mt-3 text-start text-2xl'>
                Coworking Space
              </h2>
              <p className='text-black text-start ml-6 text-base'>
                Acces to shared workspace
              </p>
              <div className='flex items-center justify-between py-4 h-auto border-t-2 border-neutral-200 ml-6 mr-6 mt-4 '>
                <p className='text-black text-start text-lg'>1-20 People</p>
                <span>
                  <strong className='font-bold'>$19</strong> /person/day
                </span>
              </div>
              <div className='flex py-4 items-center justify-between h-auto border-t-2 border-neutral-200 ml-6 mr-6'>
                <span className='text-start text-lg'>Check In</span>
                <span className='flex gap-1'>
                  <span> 12 / 7 / 2023 </span>
                  <FaRegCalendar size={18} className='mt-1' />
                </span>
              </div>
              <div className='py-4 h-auto border-t-2 border-neutral-200 ml-6 mr-6'></div>

              <button className='ml-6 hover:bg-black bg-black text-white rounded-3xl btn btn-wide'>
                Reserve Space
              </button>
              <div className='flex justify-between mt-8 px-4'>
                <p className='text-start text-lg'>$19 x 5 days</p>
                <span className='font-bold'> 150$</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Page2;
