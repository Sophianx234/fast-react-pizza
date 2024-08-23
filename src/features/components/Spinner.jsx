import { HashLoader } from "react-spinners"

function Spinner({isLoading}) {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
    return (
        <div>
            <div className=" absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-yellow-200 opacity-100 ">
          <HashLoader
            color="orange"
            loading={isLoading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        </div>
    )
}

export default Spinner
