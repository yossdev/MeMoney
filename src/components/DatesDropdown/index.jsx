import { Calendar } from 'react-date-range'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { useState } from 'react'

const DatesDropdown = () => {
  const [date, setDate] = useState(new Date())

  const handleSelect = (date) => {
    setDate(date)
    console.log(date)
  }

  return (
    <Calendar
      showMonthAndYearPickers={true}
      date={date}
      onChange={handleSelect}
    />
  )
}

export default DatesDropdown
