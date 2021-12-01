import YearMonthPicker from 'react-year-month-picker'

const FilterMonth = (props) => {
  const { month, year, handleChange } = props

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
