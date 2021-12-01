import logo from '../../assets/ms-icon-310x310.png'

const About = () => {
  document.title = 'About'
  return (
    <div className="container mx-auto my-auto xl:flex grid px-5 items-center min-h-screen">
      <div className="flex align-top justify-center">
        <img src={logo} alt="logo" className="w-28" />
        <div className="flex px-5 justify-center items-center">
          <h2 className="text-5xl font-medium">MeMoney</h2>
        </div>
      </div>

      <div className="flex  w-auto mx-auto items-center max-w-5xl">
        <article className="text-justify px-8 mb-10">
          <p className="lg:text-2xl text-xl">
            Looking for a reliable money management app to monitor, review, and
            plan your expenses? Then you should consider MeMoney.
          </p>
          <br />
          <p className="lg:text-2xl text-xl">
            MeMoney offers a swift and straightforward management of your
            finances. Apart from keeping track of your financial dealings – both
            business and personal, the app also produces accurate spending
            reports on request. With an inbuilt budget planner and spending
            monitor, MeMoney provides you with periodic financial data and asset
            management reviews.
          </p>
        </article>
      </div>
    </div>
  )
}

export default About
