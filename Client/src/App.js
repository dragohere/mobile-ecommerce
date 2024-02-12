import "./App.css";
import "./Styles.css";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home/Index";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SingleProduct from "./Components/SingleProduct";
import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import Login from "./Components/LoginPage/Index";
import { useDispatch } from "react-redux";
import Profile from "./Components/Profile/Index";
import Support from "./Components/Support";
import Shop from "./Components/Shop/Index";
import DialogBox from "./Components/DialogBox";
import ErrorPage from "./Components/ErrorPage";
import Register from "./Components/RegisterPage/Index";

function App() {
  const [cart, setCart] = useState({});
  // const [cart, setCart] = useState(() => {
  //   const savedCart = sessionStorage.getItem("cart") || [];
  //   return savedCart ? JSON.parse(savedCart) : [];
  // });
  const [warningOpen, setWarningOpen] = useState(false);
  const [errorPage, setErrorPage] = useState(false);
  const DialogBoxData = {
    continueButton: "Visit anyway..",
    rejectionButton: "No leave",
    contentData: "This site is under development please go through the functionalities and review back in contact form.",
    boxTitle: "Warning Note",
  };
  useEffect(() => {
    setWarningOpen(true);
  }, []);

  const getErrorPage = () => {
    setErrorPage(true);
  };
  const handleDialogClose = () => {
    setWarningOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="Apps">
      {errorPage ? (
        <ErrorPage />
      ) : (
        <>
          <DialogBox
            open={warningOpen}
            handleDialogClose={handleDialogClose}
            continueButton={DialogBoxData?.continueButton}
            rejectionButton={DialogBoxData?.rejectionButton}
            boxTitle={DialogBoxData?.boxTitle}
            contentData={DialogBoxData?.contentData}
            dialogClickFunction={handleDialogClose}
            getErrorPage={getErrorPage}
          />
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
              <Route index element={<Home setCart={setCart} cart={cart} />} />
              <Route path="shop" element={<Shop />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route
                path="/singleproduct/:productId"
                element={<SingleProduct setCart={setCart} cart={cart} />}
              />
              <Route
                path="cart"
                element={<Cart setCart={setCart} cart={cart} />}
              />
              <Route path="register" element={<Register />} />
              <Route path="support" element={<Support />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
