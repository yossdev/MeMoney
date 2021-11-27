const Summary = () => {
  const summary = [
    {
      key: 'Income',
      money: 0,
    },
    {
      key: 'Expenses',
      money: 0,
    },
    {
      key: 'Balance',
      money: 0,
    },
  ]

  const summaries = summary.map((v) => (
    <div
      key={v.key}
      className="bg-LightYellow2 rounded-lg max-h-72 w-72 sm:m-10 m-5"
    >
      <div className="p-3">
        <p className="text-center text-xl font-medium py-1 px-20">{v.key}</p>
        <p className="text-center text-2xl font-bold my-1 py-2 overflow-x-auto">
          {v.money}
        </p>
      </div>
    </div>
  ))
  return (
    <div className="flex justify-evenly">
      <section className="sm:flex grid justify-between my-5 overflow-x-auto">
        {summaries}
      </section>
    </div>
  )
}

export default Summary
