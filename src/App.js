// Components
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
    return (
        <div className="App" data-testid="app">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
