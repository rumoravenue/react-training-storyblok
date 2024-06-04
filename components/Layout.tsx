import Navigation from './Navigation';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, locale, locales }) => (
  <div>
    <Navigation locales={locales} locale={locale} />
    {children}
    {/* <Footer /> */}
  </div>
);

export default Layout;
