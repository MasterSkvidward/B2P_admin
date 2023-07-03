import "./styles/App.scss";
import Header from "./components/elements/Header/Header";
import Sidebar from "./components/elements/Sidebar/Sidebar";
import Container from "./components/elements/Container/Container";
import AppRouter from "./components/elements/AppRouter/AppRouter";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Container>
        <Header />
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
