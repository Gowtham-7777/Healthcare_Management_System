import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../Elements/RelatedDoctors'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext)
  const navigate = useNavigate()

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotTime, setSlotTime] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]) // Defaults to today's date

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async (date) => {
    setDocSlots([])

    // Parse the selected date
    const currentDate = new Date(date)
    currentDate.setHours(8, 0, 0, 0) // Starting time of the day at 10:00
    const endTime = new Date(date)
    endTime.setHours(23, 0, 0, 0) // Ending time of the day at 21:00

    const timeSlots = []

    while (currentDate < endTime) {
      const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

      let day = currentDate.getDate()
      let month = currentDate.getMonth() + 1
      let year = currentDate.getFullYear()
      const slotDate = `${day}_${month}_${year}`
      const slotTime = formattedTime

      const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

      if (isSlotAvailable && (new Date() < currentDate)) { // Ensuring slot is available and time is in the future
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })
      }

      currentDate.setMinutes(currentDate.getMinutes() + 30) // Increment time by 30 mins
    }

    setDocSlots(timeSlots)
  }

  const handleDateChange = (e) => {
    const selected = e.target.value
    setSelectedDate(selected)
    getAvailableSlots(selected) // Fetch slots based on selected date
  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to book appointment')
      return navigate('/login')
    }

    try {
      const date = new Date(selectedDate)
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      const slotDate = `${day}_${month}_${year}`

      const { data } = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        { docId, slotDate, slotTime },
        { headers: { token } }
      )
      
      if (data.success) {
        toast.success(data.message)
        getDoctorsData()
        navigate('/my-appointments')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots(selectedDate)
  }, [docInfo, selectedDate])

  return docInfo && (
    <div>
      {/* Doc details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-white w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt='' /> </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>

      {/* Date and Time selection */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Select a date:</p>
        <input
          type="date"
          value={selectedDate}
          min={new Date().toISOString().split("T")[0]}
          onChange={handleDateChange}
          className="border border-gray-300 rounded px-4 py-2 my-3"
        />

        <p>Available Time Slots:</p>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlots.length ? (
            docSlots.map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-green-400 text-white' : 'text-gray-400 border border-gray-300'}`}
                key={index}
              >
                {item.time.toLowerCase()}
              </p>
            ))
          ) : (
            <p>No slots available for this date.</p>
          )}
        </div>

        <button onClick={bookAppointment} className='bg-green-400 text-white text-sm font-light px-14 py-3 rounded-full my-6'>
          Book an appointment
        </button>
      </div>

      {/* Listing related doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment
