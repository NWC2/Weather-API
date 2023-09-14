const Header = () => {
  return (
    <header>
      <input
        type="text"
        placeholder="Type in a city name"
        name="city-name"
        id="city-name"
      />
      <button className="find-weather" onclick=""> FIND WEATHER</button>
    </header>
  );
};

export default Header;
