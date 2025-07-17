import React, {useState} from "react";
import {dropdownStyles, directionStyles} from "./DropDownStyles.js";

const DropDown = ({
    direction = 'bottom',
    trigger = 'click',
    onItemClick,
    children
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropDownToggle = () => {
        setIsOpen(!isOpen);
    };

    const additionalProps = trigger === 'hover' ? {
        onMouseEnter: handleDropDownToggle,
        onMouseLeave: handleDropDownToggle,
    } : {
        onClick: handleDropDownToggle
    };

    return (
        <div
            className="relative inline-block"
            {...additionalProps}
        >
            <a className="px-4 py-2 hover:bg-gray-400 inline-block cursor-pointer">
                Open menu
            </a>
            {isOpen && (
                <div className={`${dropdownStyles} ${directionStyles[direction]}`}>
                    {React.Children.map(children, (child, index) =>
                        React.cloneElement(child, {
                            onClick: () => {
                                if (onItemClick) onItemClick(child.props.children);
                                setIsOpen(false);
                            },
                            key: child.key || index,
                        })
                    )}
                </div>
            )}
        </div>
    )
}

export default DropDown;