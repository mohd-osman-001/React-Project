import { useRouteError } from "react-router-dom"

const ErrorPage = ()=>{
    const err = useRouteError();
    console.log(`This is the error {err}`)
    return <div>err: {err.status}, ooopss {err.error.message}</div>
}

export default ErrorPage;