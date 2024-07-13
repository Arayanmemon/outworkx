function Listing() {
  return (
    <div className='text-left'>
      <div className='w-72 h-72 carousel rounded-box'>
        <div className='carousel-item w-full'>
          <img
            src='/images/frame-5.png'
            className='w-full'
            alt='Tailwind CSS Carousel component'
          />
        </div>
        <div className='carousel-item w-full'>
          <img
            src='/images/frame-5.png'
            className='w-full'
            alt='Tailwind CSS Carousel component'
          />
        </div>
        <div className='carousel-item w-full'>
          <img
            src='/images/frame-5.png'
            className='w-full'
            alt='Tailwind CSS Carousel component'
          />
        </div>
        <div className='carousel-item w-full'>
          <img
            src='/images/frame-5.png'
            className='w-full'
            alt='Tailwind CSS Carousel component'
          />
        </div>
        <div className='carousel-item w-full'>
          <img
            src='/images/frame-5.png'
            className='w-full'
            alt='Tailwind CSS Carousel component'
          />
        </div>
      </div>
      <div className='flex justify-between font-semibold'>
        <p>Lorem ipsum dolor sit</p>
        <span>&#9733; {` `}4.93</span>
      </div>
      <p>102$</p>
    </div>
  );
}

export default Listing;
