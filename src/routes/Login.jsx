export default function Login() {
  return (
    <div className='flex min-h-screen w-screen'>
      <div className='mx-10 sm:mx-20'>
        <img className='mt-9' src='/images/logo.png' alt='' />
        <p className='mt-32 mb-4 font-nohemi text-5xl font-bold'>Login</p>
        <p className='mb-10 text-xl sm:text-sm font-normal text-opacity-70 font-mluvka '>
          Don’t have an account?
          <span className='font-bold underline hover:cursor-pointer ml-2'>
            <a href='/auth/register'>Sign up</a>
          </span>
        </p>

        <form action='' className=''>
          <input
            className='mb-5 px-3 block border border-black rounded-lg h-16 w-80 sm:w-96   placeholder-black placeholder-opacity-70'
            type='text'
            name=''
            placeholder='Email Address* '
            id=''
          />
          <input
            className='mb-5 px-3 block border border-black rounded-lg h-16 w-80 sm:w-96   placeholder-black placeholder-opacity-70'
            type='text'
            name=''
            placeholder=' password* '
            id=''
          />

          <button className='bg-black text-2xl font-nohemi font-medium h-16 w-80 sm:w-96 rounded-3xl text-white mt-5'>
            Login
          </button>
        </form>
      </div>

      <div className='hidden md:block w-3/5 login-bg'></div>
    </div>
  );
}
