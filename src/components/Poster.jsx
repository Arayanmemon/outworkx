function Poster() {
  return (
    <>
      <div className='ml-2 w-full'>
        <picture className='flex justify-center'>
          <source
            media='(min-width: 1024px)'
            srcSet='/images/group-4.png'
            sizes=''
          />
          <img src='/images/Banner.png' alt='' />
        </picture>
      </div>
    </>
  );
}

export default Poster;
