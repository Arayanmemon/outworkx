export default function Register() {
  return (
    <div className='flex min-h-screen w-screen'>
      <div className='mx-10 sm:mx-20'>
        <img className='mt-9' src='/images/logo.png' alt='' />
        <p className='mt-10 mb-8 font-nohemi text-5xl font-bold'>Sign up</p>

        <input
          className='mb-5 px-3 block border border-black rounded-lg h-16 w-80 sm:w-96  placeholder-black placeholder-opacity-70'
          type='text'
          name=''
          placeholder='First name*'
          id=''
        />
        <input
          className='mb-5 px-3 block border border-black rounded-lg h-16 w-80 sm:w-96   placeholder-black placeholder-opacity-70'
          type='text'
          name=''
          placeholder='Last name*'
          id=''
        />
        <input
          className='mb-5 px-3 block border border-black rounded-lg h-16 w-80 sm:w-96   placeholder-black placeholder-opacity-70'
          type='text'
          name=''
          placeholder='E-mail*'
          id=''
        />
        <input
          className='mb-2 px-3 block border border-black rounded-lg h-16 w-80 sm:w-96   placeholder-black placeholder-opacity-70'
          type='text'
          name=''
          placeholder='Create password*'
          id=''
        />
        <p className='text-base font-normal text-opacity-70 font-mluvka'>
          Password must be at least 8 characters long
        </p>
        <button className='bg-black text-2xl font-nohemi font-medium h-16 w-80 sm:w-96  rounded-3xl text-white mt-4'>
          Sign up
        </button>
        <p className='mt-4 text-xl sm:text-sm font-normal text-opacity-70 font-mluvka'>
          Already a member?
          <span className='font-bold font-mluvka underline hover:cursor-pointer ml-2'>
            <a href='/auth/login'>Login</a>
          </span>
        </p>
      </div>

      <div className='hidden md:block w-3/5 login-bg'></div>
    </div>
  );
}
