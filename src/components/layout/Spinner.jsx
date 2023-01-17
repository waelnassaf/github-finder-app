import SpinnerIcon from "./assets/spinner.gif"
const Spinner = () => {
    return (
        <div className="w-100 mt-20">
            <img
                src={SpinnerIcon}
                alt="Loading..."
                width="180"
                className="mx-auto"
            />
        </div>
    )
}

export default Spinner
