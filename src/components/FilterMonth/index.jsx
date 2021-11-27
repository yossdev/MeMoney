import YearMonthPicker from 'react-year-month-picker'
import { useState } from 'react'

const FilterMonth = () => {
  const date = new Date()
  const [month, setMonth] = useState(date.getMonth() + 1)
  const [year, setYear] = useState(date.getFullYear())

  let ld = new Date(year, month, 0)
  let lastDay = ld.getDate()

  const handleChange = (date) => {
    setMonth(date._a[1] + 1)
    setYear(date._a[0])
  }

  return (
    <>
      <YearMonthPicker
        defaultYear={year}
        defaultMonth={month}
        minYear={2015}
        maxYear={2030}
        closeOnSelect
        onChange={handleChange}
      />
    </>
  )
}

export default FilterMonth
