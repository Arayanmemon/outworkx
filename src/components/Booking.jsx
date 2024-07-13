import PropTypes from 'prop-types';

const Booking = ({ img }) => {
  return (
    <tr className='flex gap-4 text-center my-2 mx-4 sm:mx-0'>
      <td className='w-1/4 sm:w-14'>
        <img className='rounded-lg' src={img} alt='' />
      </td>
      <td className='w-3/4 sm:w-52'>
        Coworking Space: Corporate Suites Rockefeller Center in New York City
      </td>
      <td className='hidden sm:block w-36'>L234 Hickle Hights</td>
      <td className='hidden sm:block w-36'>09:00 AM-06:00 PM</td>
      <td className='hidden sm:block w-36'>12/7/2023</td>
      <td className='hidden sm:block w-28'>05</td>
      <td className='hidden sm:block w-24'>$140</td>
      <td className='hidden sm:block w-16'>01</td>
      <td className='hidden sm:block w-16'>01</td>
    </tr>
  );
};

Booking.propTypes = {
  img: PropTypes.string.isRequired
};

export default Booking;
