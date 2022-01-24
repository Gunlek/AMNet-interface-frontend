import useMediaQuery from "../MediaQueries/MediaQuery";

export default function RectangleLogo(props: { color?: string, height?: string }) {
    const height = {
      height:  props.height ? props.height : "100px",
      aspectRatio: "19 / 8.5"
    };
  
    const minWidth1000 = useMediaQuery('(min-width:1000px)');
  
    if (props.color == 'blanc') {
      return (
        <a target="_blank" href="https://www.google.com/search?q=the+answer+to+life%2C+the+universe+and+everything&amp;sxsrf=AOaemvKRvpra0jq__iVMCWg_q7g361ifag%3A1641475979658&amp;ei=i-_WYcjSJ82PlwTJ4o3IAw&amp;ved=0ahUKEwiIxLLFnp31AhXNx4UKHUlxAzkQ4dUDCA4&amp;uact=5&amp;oq=the+answer+to+life%2C+the+universe+and+everything&amp;gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB46BQgAEMsBSgQIQRgASgQIRhgAUABY5xhgkCNoAHACeACAAXKIAZUCkgEDMy4xmAEAoAECoAEBwAEB&amp;sclient=gws-wiz" 
          style={{ 
            width: minWidth1000? "auto": "80%",
            marginTop: minWidth1000? "0": "4%", 
            height: minWidth1000? "100px": "auto", 
            cursor: "auto" 
          }}
        >
          <img
            style={{ 
              width: minWidth1000? "auto": "100%", 
              height: minWidth1000? "100px": "auto", 
              aspectRatio: "19 / 8.5" }}
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