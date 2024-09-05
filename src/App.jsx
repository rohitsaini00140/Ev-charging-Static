import ThemeProvider from "./layout/theme/ThemeProvider";
import Router from "./routes/Router";

function App() {

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
