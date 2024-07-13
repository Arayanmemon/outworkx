export default function Footer() {
  return (
    <div className='bg-base-200 text-center  '>
      <footer className='footer p-14 space-x-10 bg-base-200 text-base-content'>
        <aside>
          <img src='./images/logo.png' alt='' />
          <p className='w-64 text-gray-500 text-base text-left mt-2'>
            Coworkspaces offer a collaborative work environment for individuals
            from various professions to share and work together.
          </p>
          <span className='flex'>
            <img src='./images/apple.png' alt='' />
            <img src='./images/play.png' alt='' />
          </span>
        </aside>
        <nav>
          <header className='text-lg font-semibold'>Company</header>
          <a className='text-gray-500 text-base link link-hover'>About Us</a>
          <a className='text-gray-500 text-base link link-hover'>Blog</a>
          <a className='text-gray-500 text-base link link-hover'>FAQs</a>
          <a className='text-gray-500 text-base link link-hover'>Contact</a>
        </nav>
        <nav>
          <header className='text-lg font-semibold'>Support</header>
          <a className='text-base text-gray-500 link link-hover'>
            Get in Touch Us
          </a>
          <a className='text-base text-gray-500 link link-hover'>Help Center</a>
          <a className='text-base text-gray-500 link link-hover'>Live Chat</a>
          <a className='text-base text-gray-500 link link-hover'>
            How it Works
          </a>
        </nav>
        <nav>
          <header className='text-lg font-semibold'>Contact Us</header>
          <a className='text-gray-500 text-base link link-hover'>
            Email: support@domain.com
          </a>
          <a className='text-gray-500 text-base link link-hover'>
            Phone: 1(00)832 2342
          </a>
          <span className='flex gap-3'>
            <img src='./images/facebook.png' alt='' />
            <img src='./images/twitter.png' alt='' />
            <img src='./images/linkedin.png' alt='' />
            <img src='./images/youtube.png' alt='' />
            <img src='./images/instagram.png' alt='' />
          </span>
        </nav>
      </footer>
      <div className='w-90% mx-auto h-1px bg-gray-300'></div>
      <p className='py-8 text-base text-gray-500'>
        2024 @outworkx. All rights reserved
      </p>
    </div>
  );
}
