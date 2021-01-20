export const PackageDetail = (props) =>{
    return(
        <div>
            <h3>{props.title}</h3>
            <p className="package-blue my-4">{props.price}</p>
            <p className="welcome-paragraph">{props.desc}</p>
        </div>
    )
}