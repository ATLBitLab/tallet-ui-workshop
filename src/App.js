import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App bg-black w-full h-full text-white p-8 flex flex-col space-between justify-between">
      <img src="tallet-logo.svg" alt="" className="w-[224px] mx-auto" />
      
      <div>
        <p className="text-[96px] font-sans">tallet</p>
        <p className="text-2xl text-dark-neutral-7">For all you Taro assets</p>
      </div>
      
      <div className="w-full">
        <Button>Create a new wallet</Button>
        <Button style="free">Restore existing wallet</Button>
      </div>
      
      <p className="text-base text-dark-neutral-7">Made with 💔️ in the ATL</p>
    </div>
  );
}

export default App;
