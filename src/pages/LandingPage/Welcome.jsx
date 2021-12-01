import { ReactComponent as Artwork } from '../../assets/Artwork.svg'

const Welcome = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto md:flex grid">
        <div className="px-5">
          <p className="xl:text-7xl sm:text-6xl text-5xl font-bold text-BlackGrey1 lg:mt-52 md:mt-32 mt-16">
            Smart Money Manager App for <span>all.</span>
          </p>
          <p className="text-BlackGrey1 font-medium 2xl:text-xl text-lg pt-7">
            MeMoney is the world's first budgeting & expense tracker WebApp
            built with you in mind.
          </p>
        </div>
        <div className="flex justify-center">
          <Artwork className="object-none lg:w-full w-3/4" />
        </div>
      </div>
      {/* <section className="bg-LightYellow2">
        <div className="container mx-auto">
          <h1 className="text-center">The Feature At A Glance</h1>
          <div className="flex justify-center">
            <hr className="w-72" />
          </div>
          <div className="grid grid-col-2">
            <div>1</div>
            <div>2</div>
          </div>
          <div className="grid grid-col-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <h1 className="text-center">Dont't take our word for it</h1>
          <div className="flex justify-center">
            <hr className="w-72" />
          </div>
          <div className="grid grid-col-2">
            <div>1</div>
            <div>2</div>
          </div>
          <div className="grid grid-col-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </section>
      <section>
        <p>#Let's Manage Now!</p>
        <button type="button">Try now</button>
      </section> */}
    </div>
  )
}

export default Welcome
