import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';

function App() {
  const scrollAction = (id) =>{
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({behavior : "smooth"})
    } 
  }
  return (
    <div>
            <header>
                <h2 className='text-green-700 text-6xl font-bold'>Logo</h2>
                <nav className=' text-white text-3xl font-bold mt-2 flex flex-row gap-6 w-full justify-end '>
                    <button className='hover:bg-green-700 font-bold py-2 px-6 rounded-full' onClick={()=>scrollAction("Home")}>Home</button>
                    <button className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 rounded-full py-2 px-6' onClick={()=>scrollAction("Content")}>Content</button>
                    <button className='bg-green-700 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 rounded-full py-2 px-6' onClick={()=>scrollAction("Content")}>Content</button>
                    <button onClick={()=>scrollAction("Content")}>Content</button>
                </nav>
            </header>
      <Layout />
    </div>
  );
}

export default App;
