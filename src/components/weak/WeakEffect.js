import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const Effect = ({ result, x }) => {
    var color = {
        background: "#FFFFFF",
        borderRadius: 5
    };
    switch (x) {
        case 4 : 
            color.background = "RGB(255,167,167,0.5)"
            break;
        case 2:
            color.background = "RGB(255,224,140,0.5)"
            break;
        case 1:
            color.background = "RGB(206,242,121,0.5)"
            break;
        case 0.5:
            color.background = "RGB(178,204,255,0.5)"
            break;
        case 0.25:
            color.background = "RGB(181,178,255,0.5)"
            break;
        case 0:
            color.background = "RGB(213,213,213,0.5)"
            break;
        default:
            break;
    }
    return (
        <>
            {result.length ? (
                <div class="container" style={color}>
                    <p>x{x}</p>
                    <p>{result}</p>
                </div>
                ) : (<></>)
            }
        </>
    )
};
export default Effect;