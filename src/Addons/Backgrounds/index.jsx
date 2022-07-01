import Unsplash from "./Unsplash";
import cloneElement from 'react';

function Background(props) {

    if (props.model === 'Unsplash') {
        console.log('xx')
        return (
            <Unsplash height={props.height} width={props.width}>
                {props.children}
            </Unsplash>
        )
    }

}
export default Background;