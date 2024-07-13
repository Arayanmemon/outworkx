export default function ComingSoon() {
  return (
    <div className='flex items-center text-center flex-col mt-52'>
      <p className='font-nohemi font-bold text-5xl sm:text-7xl'>
        Cooking our website{' '}
      </p>
      <p className='text-3xl mt-7'>
        we are going to launch our website very soon!
      </p>
      <br />
      <br />
      <div>
        {' '}
        Pages :
        <ul>
          <li>
            <a className='hover:text-blue-600' href='/'>
              /
            </a>
          </li>
          <li>
            <a className='hover:text-blue-600' href='/#/explore'>
              explore
            </a>
          </li>
          <li>
            <a className='hover:text-blue-600' href='/#/space'>
              space
            </a>
          </li>
          <li>
            <a className='hover:text-blue-600' href='/#/publishing'>
              publishing
            </a>
          </li>
          <li>
            <a className='hover:text-blue-600' href='/#/auth/login'>
              login
            </a>
          </li>
          <li>
            <a className='hover:text-blue-600' href='/#/auth/register'>
              register
            </a>
          </li>
          <li>
            <a className='hover:text-blue-600' href='/#/checkout'>
              checkout
            </a>
          </li>
          <li>
            <a className='hover:text-blue-600' href='/#/booking-history'>
              booking-history
            </a>
          </li>
        </ul>
      </div>
      <div className='flex gap-5 mt-56'>
        <div className=' bg-grey-200 shadow-md w-14 h-14 rounded-full'>
          <img className='p-4' src='images/linkedin.png' alt='linkedin png' />
        </div>
        <div className=' bg-grey-200 shadow-md w-14 h-14 rounded-full'>
          <img className='p-4' src='images/facebook.png' alt='facebook png' />
        </div>
        <div className=' bg-grey-200 shadow-md w-14 h-14 rounded-full'>
          <img className='p-4' src='images/instagram.png' alt='instagram png' />
        </div>
      </div>
    </div>
  );
}
