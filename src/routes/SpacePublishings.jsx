import Footer from '../components/Footer';
import Header from '../components/Header';

function SpacePublishing() {
  return (
    <div className='max-w-120 m-auto overflow-x-hidden'>
      <div className='p-4'>
        <Header />

        <div className='my-6 mx-2'>
          <div className='sm:flex sm:items-center w-full sm:justify-around'>
            <h2 className='pl-2 font-bold text-4xl text-left sm:text-7xl sm:w-1/3'>
              List your Space
            </h2>
            <img
              className='my-6 mx-auto '
              src='/images/Rectangle4.png'
              alt=''
            />
          </div>

          <p className='pl-2 sm:mt-8 text-3xl text-left font-bold'>
            Tell Coworkers about your space
          </p>
          <p className='pl-2 mt-2 text-lg text-gray-600 text-left'>
            Every co-working space is unique. Highlight what makes your
            co-working space an awesome space to work.
          </p>
          <div className='mx-2 h-0.25 my-2 bg-gray-400'></div>

          <form action='' className='px-2 mt-6'>
            <div className='sm:flex flex-wrap items-center justify-around'>
              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='title' className='font-bold text-xl'>
                  Title
                </label>
                <br />
                <input
                  type='text'
                  name='title'
                  className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Title'
                />
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='subtitle' className='font-bold text-xl'>
                  Sub Title
                </label>
                <br />
                <input
                  type='text'
                  name='subtitle'
                  className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Sub Title'
                />
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='email' className='font-bold text-xl'>
                  Email
                </label>
                <br />
                <input
                  type='email'
                  name='email'
                  className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Email'
                />
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='phone' className='font-bold text-xl'>
                  Phone
                </label>
                <br />
                <input
                  type='number'
                  name='phone'
                  className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Phone'
                />
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='tables' className='font-bold text-xl'>
                  Table(s)
                </label>
                <br />
                <select
                  name='tables'
                  className='w-full bg-transparent mt-4 px-5 py-3 rounded-md border border-gray-400'
                >
                  <option>Select</option>
                </select>
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='guests' className='font-bold text-xl'>
                  Guests
                </label>
                <br />
                <select
                  name='guests'
                  className='w-full bg-transparent mt-4 px-5 py-3 rounded-md border border-gray-400'
                >
                  <option>Select</option>
                </select>
              </div>

              <div className='mt-8 w-11/12'>
                <label htmlFor='desc' className='font-bold text-xl'>
                  Description
                </label>
                <br />
                <textarea
                  name='desc'
                  className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Description'
                  cols='30'
                  rows='5'
                ></textarea>
              </div>
            </div>

            <div className='my-8 h-0.25 mx-auto bg-gray-400'></div>

            <div className=''>
              <h2 className='my-2 font-bold text-3xl'>
                So what does it look like?
              </h2>
              <p className='text-gray-600'>
                We recommend taking professional photos that reflects how
                awesome your co-working space is.
              </p>
            </div>

            <div className='my-2 h-0.25 mx-auto bg-gray-400'></div>

            <div className='my-6'>
              <h2 className='font-bold mb-2 text-xl'>Header image</h2>
              <label htmlFor='header-img'>
                <p>Size (889px X 510px)</p>
                <input
                  type='image'
                  id='header-img'
                  name='header-img'
                  src='/images/Frame 48.png'
                  className='hidden sm:block'
                />
                <input
                  type='image'
                  id='header-img'
                  name='header-img'
                  src='/images/upload.png'
                  className='sm:hidden'
                />
              </label>
            </div>

            <div className='my-6'>
              <h2 className='font-bold mb-2 text-xl'>Additional images</h2>
              <label htmlFor='img-upload'>
                <p>Image Files: JPEG, PNG, Min 5, Max 20, Max File Size: 5MB</p>
                <input
                  type='image'
                  id='img-upload'
                  name='img-upload'
                  src='/images/Frame 48.png'
                  className='hidden sm:block'
                />
                <input
                  type='image'
                  id='img-upload'
                  name='img-upload'
                  src='/images/upload.png'
                  className='sm:hidden'
                />
              </label>
            </div>

            <div className='my-8 h-0.25 mx-auto bg-gray-400'></div>

            <div className=''>
              <h2 className='my-2 font-bold text-3xl'>
                Tell Coworkers about your space aminities
              </h2>
              <p className='text-gray-600'>
                Some people look for a co-working space with specific amenities.
                Help them find you when they filter.
              </p>
            </div>

            <div className='my-2 h-0.25 mx-auto bg-gray-400'></div>

            <div className='mt-8 text-xl flex flex-wrap justify-start gap-6 sm:gap-x-44'>
              <label htmlFor=''>
                <input type='checkbox' className='mr-4' name='' id='' />
                High-Speed WiFi
              </label>
              <label htmlFor=''>
                <input type='checkbox' className='mr-4' name='' id='' />
                Heating
              </label>
              <label htmlFor=''>
                <input type='checkbox' className='mr-4' name='' id='' />
                Scanner
              </label>
              <label htmlFor=''>
                <input type='checkbox' className='mr-4' name='' id='' />
                Printer
              </label>
              <label htmlFor=''>
                <input type='checkbox' className='mr-4' name='' id='' />
                Nap Room
              </label>
            </div>
            <div className='mt-8 sm:w-5/12'>
              <label htmlFor='other' className='font-bold text-xl'>
                Other
              </label>
              <br />
              <input
                type='text'
                name='other'
                className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                placeholder='Other'
              />
            </div>

            <div className='my-8 h-0.25 mx-auto bg-gray-400'></div>

            <div className=''>
              <h2 className='my-2 font-bold text-3xl'>
                Tell Coworkers about your space etiquette rules
              </h2>
              <p className='text-gray-600'>
                Maintain a clean and organized workspace, respect noise levels,
                and be considerate of shared areas to foster a positive and
                efficient work environment for everyone.
              </p>
            </div>

            <div className='my-2 h-0.25 mx-auto bg-gray-400'></div>

            <div className='mt-6 flex flex-col sm:flex-row sm:justify-between text-xl gap-4'>
              <label htmlFor=''>
                <input type='checkbox' className='mr-6' name='' id='' />
                No Smoking
              </label>
              <label htmlFor=''>
                <input type='checkbox' className='mr-6' name='' id='' />
                No Pets Allowed
              </label>
              <label htmlFor=''>
                <input type='checkbox' className='mr-6' name='' id='' />
                Respect Boundaries
              </label>
              <label htmlFor=''>
                <input type='checkbox' className='mr-6' name='' id='' />
                Keep Workspace Clean
              </label>
            </div>

            <div className='my-8 h-0.25 mx-auto bg-gray-400'></div>

            <div>
              <h2 className='text-3xl font-bold'>
                Help Coworkers find your space
              </h2>
            </div>

            <div className='my-8 h-0.25 mx-auto bg-gray-400'></div>

            <div className=''>
              <label htmlFor='address' className='font-bold text-xl'>
                Address
              </label>
              <br />
              <input
                type='text'
                name='address'
                className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                placeholder=''
              />
            </div>

            {/* Map For Mobile Screen */}
            <div className='sm:hidden mt-6 w-11/12'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1802.292453661725!2d68.3629215408622!3d25.38522465292202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71f828bc8deb%3A0x8f34ff091f260348!2sNational%20Incubation%20Center%20Hyderabad!5e0!3m2!1sen!2s!4v1706375020653!5m2!1sen!2s'
                width='380'
                height='300'
                style={{ border: '0' }}
                allowfullscreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            {/* Map for Big Screens */}
            <div className='hidden sm:block mt-6 w-11/12'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1802.292453661725!2d68.3629215408622!3d25.38522465292202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71f828bc8deb%3A0x8f34ff091f260348!2sNational%20Incubation%20Center%20Hyderabad!5e0!3m2!1sen!2s!4v1706375020653!5m2!1sen!2s'
                width='1220'
                height='400'
                style={{ border: '0' }}
                allowfullscreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>

            <div className='sm:flex flex-wrap items-center justify-around'>
              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='location' className='font-bold text-xl'>
                  Location Name
                </label>
                <br />
                <input
                  type='text'
                  name='location'
                  className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Location Name'
                />
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='unit' className='font-bold text-xl'>
                  Unit / Floor Number
                </label>
                <br />
                <input
                  type='text'
                  name='unit'
                  className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Unit / Floor Number'
                />
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='address1' className='font-bold text-xl'>
                  Address Line 1
                </label>
                <br />
                <input
                  type='text'
                  name='address1'
                  className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Address Line 1'
                />
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='address2' className='font-bold text-xl'>
                  Address Line 2
                </label>
                <br />
                <input
                  type='text'
                  name='address2'
                  className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Address Line 2'
                />
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='city' className='font-bold text-xl'>
                  Town / City
                </label>
                <br />
                <input
                  type='text'
                  name='city'
                  className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Town / City'
                />
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='country' className='font-bold text-xl'>
                  Country
                </label>
                <br />
                <input
                  type='text'
                  name='country'
                  className='w-full mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Country'
                />
              </div>

              <div className='mt-8 sm:w-11/12'>
                <label htmlFor='zip' className='font-bold text-xl'>
                  Zip / postal Code
                </label>
                <br />
                <input
                  type='text'
                  name='zip'
                  className='w-full sm:w-1/2 mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Zip / postal Code'
                />
              </div>
            </div>

            <div className='my-8 h-0.25 mx-auto bg-gray-400'></div>

            <div>
              <h2 className='text-3xl font-bold'>
                Membership Price of workspace
              </h2>
            </div>

            <div className='my-8 h-0.25 mx-auto bg-gray-400'></div>

            <div className='sm:flex flex-wrap items-center justify-around'>
              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='duration' className='font-bold text-xl'>
                  Duration
                </label>
                <br />
                <select
                  name='duration'
                  className='w-full bg-transparent mt-4 px-5 py-3 rounded-md border border-gray-400'
                >
                  <option>Per Day</option>
                </select>
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='people' className='font-bold text-xl'>
                  No of People
                </label>
                <br />
                <select
                  name='people'
                  className='w-full bg-transparent mt-4 px-5 py-3 rounded-md border border-gray-400'
                >
                  <option>1 Person</option>
                </select>
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='currency' className='font-bold text-xl'>
                  Currency
                </label>
                <br />
                <select
                  name='currency'
                  className='w-full bg-transparent mt-4 px-5 py-3 rounded-md border border-gray-400'
                >
                  <option>PKR</option>
                </select>
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='price' className='font-bold text-xl'>
                  Price
                </label>
                <br />
                <input
                  type='text'
                  name='price'
                  className='w-full bg-transparent mt-4 px-5 py-3 rounded-md border border-gray-400'
                  placeholder='Price'
                />
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='access' className='font-bold text-xl'>
                  Access Hours
                </label>
                <br />
                <select
                  name='access'
                  className='w-full bg-transparent mt-4 px-5 py-3 rounded-md border border-gray-400'
                >
                  <option>Select</option>
                </select>
              </div>

              <div className='mt-8 sm:w-5/12'>
                <label htmlFor='date' className='font-bold text-xl'>
                  Date
                </label>
                <br />
                <input
                  type='date'
                  name='date'
                  className='w-full bg-transparent mt-4 px-5 py-3 rounded-md border border-gray-400'
                />
              </div>
            </div>

            <div className='my-8 h-0.25 mx-auto bg-gray-400'></div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SpacePublishing;
