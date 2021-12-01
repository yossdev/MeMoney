import Logo from '../NavBar/components/Logo'

const Footer = () => {
  return (
    <footer className="pt-5">
      <div className="flex justify-center">
        <Logo />
      </div>
      <p className="text-center p-3 text-sm">
        &copy; 2021 MeMoney | Free Budgeting and Expense Tracker WebApp
      </p>
    </footer>
  )
}

export default Footer
