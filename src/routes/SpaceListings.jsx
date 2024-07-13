import Footer from '../components/Footer';
import Header from '../components/Header';
import Listing from '../components/Listing';
import Poster from '../components/Poster';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function HomePage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };
  return (
    <div className='max-w-120 m-auto overflow-x-hidden'>
      <div className='text-center p-4'>
        <Header />

        <div className='hero-img rounded-3xl mx-auto py-40 text-white'>
          <h1 className='text-4xl sm:text-7xl font-semibold'>Find Your Next</h1>
          <h1 className='text-4xl sm:text-7xl font-semibold'>
            Coworking Office
          </h1>
          <p className='text-2xl sm:text-3xl my-4'>Explore the workspaces</p>
          <input
            type='search'
            className='rounded-3xl sm:rounded-r-none w-64 h-12 p-3 text-black placeholder:font-black placeholder:text-center'
            placeholder='Find'
            name=''
            id=''
          />
          <input
            type='search'
            className='border-l-2 my-4 border-gray-300 rounded-3xl sm:rounded-l-none w-64 h- p-3 text-black placeholder:font-bold placeholder:text-center'
            placeholder='Where'
            name=''
            id=''
          />
          <p className='text-xl'>
            The Worlds Largest Coworking Space Marketplace | Search & Get Quotes
            Today
          </p>
        </div>

        {/* Category Crousel */}
        <div className='my-6'>
          <h1 className='text-3xl font-bold text-left'>
            Explore the Categories
          </h1>
          <div className='flex gap-4 my-4'>
            <input
              type='radio'
              aria-label='Offices'
              name='category'
              className='btn rounded-3xl w-20'
            />
            <input
              type='radio'
              aria-label='Homes'
              name='category'
              className='btn rounded-3xl w-20'
            />
            <input
              type='radio'
              aria-label='Cafe'
              name='category'
              className='btn rounded-3xl w-20'
            />
          </div>

          <Carousel
            responsive={responsive}
            className='px-10 sm:p-0'
            showDots={true}
            removeArrowOnDeviceType={['tablet', 'mobile']}
          >
            <div id='item1' className=''>
              <div className='bg-base-100'>
                <figure>
                  <img src='/images/frame-5.png' alt='Shoes' />
                </figure>
              </div>
            </div>
            <div id='item2' className=''>
              <div className='bg-base-100'>
                <figure>
                  <img src='/images/frame-5.png' alt='Shoes' />
                </figure>
              </div>
            </div>
            <div id='item3' className=''>
              <div className='bg-base-100'>
                <figure>
                  <img src='/images/frame-5.png' alt='Shoes' />
                </figure>
              </div>
            </div>
            <div id='item4' className=''>
              <div className='bg-base-100'>
                <figure>
                  <img src='/images/frame-5.png' alt='Shoes' />
                </figure>
              </div>
            </div>
            <div id='item5' className=''>
              <div className='bg-base-100'>
                <figure>
                  <img src='/images/frame-5.png' alt='Shoes' />
                </figure>
              </div>
            </div>
          </Carousel>
        </div>

        {/* Listing Crousel */}
        <div className='my-6'>
          <h1 className='text-3xl font-bold text-left'>
            Explore the Categories
          </h1>
          <div className='flex flex-wrap justify-center gap-4 my-8'>
            <Listing />
            <Listing />
            <Listing />
            <Listing />
          </div>
          <div className='flex flex-wrap justify-center gap-4 my-8'>
            <Listing />
            <Listing />
            <Listing />
            <Listing />
          </div>
        </div>

        <Poster />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
