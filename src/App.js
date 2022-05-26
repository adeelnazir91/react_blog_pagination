import { ThemeProvider } from "styled-components";
import GlobleStyles from "./components/styles/Globlestyle";
import Wrapper from "./components/Wrapper";
import CardfullDetails from "./components/lunch-details/CardfullDetails";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";


const theme = {
  colors: {
    header: 'blueviolet',
    body: '#fff',
    footer: '#000000c4'
  }



}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobleStyles />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Wrapper />} />
            <Route path="/carddetails/:id" exact element={<CardfullDetails />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
