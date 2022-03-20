import useMediaQuery from "../MediaQueries/MediaQuery";

export default function RectangleLogo(props: { color?: string, height?: string }) {
    const height = {
      height:  props.height ? props.height : "100px",
      aspectRatio: "19 / 8.5"
    };
  
    const minWidth1000 = useMediaQuery('(min-width:1000px)');
  
    if (props.color == 'white') {
      return (
        <a target="_blank" href="https://www.google.com/search?q=the+answer+to+life%2C+the+universe+and+everything" 
          style={{ cursor: "auto" }}>
          <img style={{ height: "100px", aspectRatio: "19 / 8.5" }}
            src="/static/logo/white_logo.svg"
            alt="Logo AMNet"
          />
        </a>
      );
    } else {
      return (
        <a href="./" style={height}>
          <img
          style={height}
          src="/static/logo/logo.svg"
          alt="Logo AMNet"
        />
        </a>
      );
    }
  }