import {getSpinnerStyle} from "./SpinStyle.js";
import { IoMdRefresh } from "react-icons/io";

const Spin = ({
    size = 'medium',
    title = "Loading",
    loading = true,
    color = "#31890ff",
    children,
    className = '',
    }) => {
    if (!loading) return children || null;

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