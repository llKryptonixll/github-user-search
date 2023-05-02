import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import GithubUserCard from "./components/GithubUserCard";
import { useState, useEffect } from "react";
import { text } from "@fortawesome/fontawesome-svg-core";

function App() {

  const [isDark, setIsDark] = useState(() => {
    const storedMode = localStorage.getItem('darkMode');
    return storedMode ? JSON.parse(storedMode) : false;
  });

  const [searchValue, setSearchValue] = useState("octocat");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try{
      const response = await fetch(`https://api.github.com/users/${searchValue}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json()
      setData(jsonData);
      setError(false)
    }
    
    catch{
      setError(true);
    }
  }

  function toggleDarkMode() {
    setIsDark(!isDark);
  }

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getData();
  }

  const mainBgClass = isDark === true ? "bg-darkMainBG" : "bg-whiteMainBG";
  const cardBgClass = isDark === true ? "bg-darkContainerBG" : "bg-whiteContainerBG";
  const textClass = isDark === true ? "text-whiteText" : "text-blackText"

  return (
    <div className={`font-spaceMono grid justify-items-center min-h-screen ${mainBgClass}`}>
      <div className="grid gap-5 content-center justify-items-center lg:w-[1000px] md:w-[80%] w-[95%] h-full md:pb-0 pb-6">
        <Header 
          toggleDarkMode={toggleDarkMode}
          isDark={isDark}
        />
        <main className="grid gap-5 w-full h-full">
          <section className="w-full">
            <Searchbar 
              isDark={isDark}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </section>
          <section className={`w-full grid gap-8 rounded-2xl shadow-2xl md:p-14 p-6 ${cardBgClass}`}>
            {error === true ? <p className={`${textClass} h-[300px] grid place-items-center sm:text-4xl text-2xl font-bold`}>No user found</p> : <GithubUserCard isDark={isDark} userData={data}/>}
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
