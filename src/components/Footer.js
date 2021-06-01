import React from "react"

function Footer()
{
    const curyear = new Date().getFullYear();

    return(
        <div>
        <footer>
            <p>
            copyright ⓒ {curyear}

            </p> 
            </footer>
            </div>
    )
}
export default Footer