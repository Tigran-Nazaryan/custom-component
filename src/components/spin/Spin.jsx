import {getSpinnerStyle} from "./SpinStyle.js";
import { IoMdRefresh } from "react-icons/io";

const Spin = ({
    size = 'medium',
    title = "Loading",
    loading = true,
    color = "#31890f",
    className = '',
}) => {
    if (!loading) return null;

    const spinnerStyle = getSpinnerStyle(size, color);

    return (
        <div className={className}>
            <div>
                <IoMdRefresh className={`animate-spin`} style={spinnerStyle} />
            </div>
            <div>
                {title && <div>{title}</div>}
            </div>
        </div>
    )
}

export default Spin;