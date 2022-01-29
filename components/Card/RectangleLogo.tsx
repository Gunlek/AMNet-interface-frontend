import useMediaQuery from "../MediaQueries/MediaQuery";

export default function RectangleLogo(props: { color?: string, height?: string }) {
    const height = {
      height:  props.height ? props.height : "100px",
      aspectRatio: "19 / 8.5"
    };
  
    const minWidth1000 = useMediaQuery('(min-width:1000px)');
  
    if (props.color == 'white') {
      return (
        <a href="./" 
          style={{ 
            width: minWidth1000? "auto": "80%",
            marginTop: minWidth1000? "0": "4%", 
            height: minWidth1000? "100px": "auto"   
          }}
        >
          <img
            style={{ 
              width: minWidth1000? "auto": "100%", 
              height: minWidth1000? "100px": "auto", 
              aspectRatio: "19 / 8.5" 
            }}
            src="/static/logo/white_logo.svg"
            alt="Logo AMNet"
          />
        </a>
      );
    } else {
      return (
        <a href="../" style={height}>
          <img
          style={height}
          src="/static/logo/logo.svg"
          alt="Logo AMNet"
        />
        </a>
      );
    }
  }