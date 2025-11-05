import reactLogo from '../assets/react.svg'

const Loader = () =>{
    return(
        <>
        <div className="loader-container">
            <img src={reactLogo} className="logo react" alt="React logo" />
        LOADING...
        </div>
        </>
    )
}

export default Loader;