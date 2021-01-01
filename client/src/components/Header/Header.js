import MobileNavigation from './MobileNavigation/MobileNavigation';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import AppTitle from './AppTitle/AppTitle';

function Header() {

  return (
    <header>
      <div className="wrapper">
        <MobileNavigation />
        <DesktopNavigation />
        <AppTitle />
      </div>
    </header>
  )
}

export default Header;