import Colors from "./components/Colors";

function App() {
  const styling = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    fontFamily: 'Arial, Helvetica, sans-serif'
  };
  return (
    <>
    <div style={styling}>
        <Colors name ="#FF6663" color="PINK" code="#FF6663" />
        <Colors name ="#333333" color="GRAY" code="#333333" />
        <Colors name ="#000000" color="BLACK" code="#000000" />
        <Colors name ="#38BB14" color="GREEN" code="#38BB14" />
        <Colors name ="#C90B0B" color="RED" code="#C90B0B" />
      </div>

      <div style={styling}>
        <Colors name ="#FF8000" color="ORANGE" code="#FF8000" />
        <Colors name ="#FFF500" color="YELLOW" code="#FFf500" />
        <Colors name ="#CCCCCC" color="LIGHT-GRAY" code="#CCCCCC" />
        <Colors name ="#7E41A2" color="PURPLE" code="#7E41A2" />
        <Colors name ="#C14911" color="BROWN" code="#C14911" />
      </div>
      
    </>
  );
}

export default App;
