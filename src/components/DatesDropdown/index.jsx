import { Calendar } from 'react-date-range'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

const DatesDropdown = () => {
  const handleSelect = (date) => {
    console.log(date) // native Date object
  }
  return <Calendar date={new Date()} onChange={handleSelect} />
}

export default DatesDropdown
