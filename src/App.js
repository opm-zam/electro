import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import { getError } from './utils';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import AboutusScreen from './screens/AboutusScreen';
import TeamScreen from './screens/TeamScreen';
import PartnershipScreen from './screens/PartnershipScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import OrderPolicyScreen from './screens/OrderPolicyScreen';
import WarrantyScreen from './screens/WarrantyScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import BasicArduinoScreen from './screens/BasicArduinoScreen';
import BasicRpiScreen from './screens/BasicRpiScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div className={sidebarIsOpen ? 'active-cont' : 'site-container'}>
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              {/* <Button
                className="Bar"
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>{' '}
              </Button> */}
              <LinkContainer to="/">
                <img
                  src="/images/word.png"
                  alt="ElectroCity Word Logo"
                  className="WordLogo"
                />
              </LinkContainer>

              <LinkContainer to="/">
                <img
                  src="/images/left.png"
                  alt="ElectroCity Logo"
                  className="Logo"
                />
              </LinkContainer>
              {/* <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>

                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Log Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Log In */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <SearchBox />
                <Nav className="me-auto  w-100  justify-content-end">
                  <Link to="/" className="home nav-link">
                    <i className="fas fa-home" /> Home
                  </Link>
                  <Link to="/cart" className="cart nav-link">
                    <i className="fas fa-shopping-cart" /> Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {/* <i className="Account fas fa-user" /> */}

                  {userInfo ? (
                    <NavDropdown title={userInfo.name} className="Dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Log Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="user nav-link" to="/signin">
                      {' '}
                      <i className="  fas fa-user" /> Log In
                    </Link>
                  )}

                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div className={sidebarIsOpen ? 'active-nav ' : ''}>
          <Nav className="text-white w-100 p-2">
            {categories.map((category) => (
              <Nav.Item className="Category" key={category}>
                <LinkContainer
                  className="IO"
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link className="IO">{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/AboutusScreen" element={<AboutusScreen />} />
              <Route path="/TeamScreen" element={<TeamScreen />} />
              <Route
                path="/PartnershipScreen"
                element={<PartnershipScreen />}
              />
              <Route path="/ContactUsScreen" element={<ContactUsScreen />} />
              <Route
                path="/OrderPolicyScreen"
                element={<OrderPolicyScreen />}
              />
              <Route path="/WarrantyScreen" element={<WarrantyScreen />} />
              <Route
                path="/PrivacyPolicyScreen"
                element={<PrivacyPolicyScreen />}
              />
              <Route
                path="BasicArduinoScreen"
                element={<BasicArduinoScreen />}
              />

              <Route path="BasicRpiScreen" element={<BasicRpiScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="cart" element={<CartScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    {' '}
                    <ProfileScreen />{' '}
                  </ProtectedRoute>
                }
              />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    {' '}
                    <OrderScreen />{' '}
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>

              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="ElectroCity">
            <h4>ELECTROCITY</h4>
            <Link to="/AboutusScreen" className="AboutUsHeader">
              {' '}
              About Us{' '}
            </Link>
            <Link to="/TeamScreen" className="TeamHeader">
              {' '}
              Our Team{' '}
            </Link>
            <Link to="/PartnershipScreen" className="PartnershipHeader">
              Partnership
            </Link>
            <Link to="/ContactUsScreen" className="ContactHeader">
              Contact Us
            </Link>
            {/* <p className="Follow">Follow us on</p> */}
          </div>

          <div className="Regulation">
            <h4>REGULATION</h4>
            <Link to="/OrderPolicyScreen" className="OrderHeader">
              Order Guidelines
            </Link>
            <Link to="/WarrantyScreen" className="WarrantyHeader">
              Warranty and Return Policy
            </Link>
            <Link to="/PrivacyPolicyScreen" className="PrivacyHeader">
              Privacy Policy
            </Link>
          </div>

          <div className="Tutorials">
            <h4>TUTORIALS</h4>
            <Link to="/BasicArduinoScreen" className="ArduinoUnoHeader">
              Basic Arduino
            </Link>
            <Link to="/BasicRpiScreen" className="RaspberryPiHeader">
              Basic Raspberry Pi
            </Link>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
