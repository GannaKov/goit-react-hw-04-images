import { ColorRing } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loader =()=>(<ColorRing
  visible={true}
  height="90"
  width="90"
  ariaLabel="blocks-loading"
  wrapperStyle={{
    marginTop: "50px",
    marginLeft: "50%",
    transform: "translate(-50%)",
  }}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>)