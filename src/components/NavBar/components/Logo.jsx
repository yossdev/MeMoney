import logo from '../../../logo.svg'

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logo} alt="logo" />
      {/*TODO change the color later*/}
      <h2 className="lg:text-lg font-medium text-gray-900 tracking-wider">
        MeMoney
      </h2>
    </div>
  )
}

export default Logo
