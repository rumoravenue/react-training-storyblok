import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children, locale, locales }) => (
  <div>
    <Navigation locales={locales} locale={locale} />
    {children}
    {/* <Footer /> */}
  </div>
);

export default Layout;
