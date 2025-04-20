
import loadingIcon from '../assets/Loading.svg';

export function Loading() {
    return (
        <img
            className="mx-auto my-auto text-white size-2/6 fill-white"
            src={loadingIcon} 
            alt="Loading icon"
        />
    );
}