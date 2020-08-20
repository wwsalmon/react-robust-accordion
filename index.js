import React, {useEffect, useRef, useState, Fragment} from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";

const Accordion = (props) => {
    const [isOpen, setIsOpen] = useState(props.open || false);
    const [height, setHeight] = useState(0);
    const [transition, setTransition] = useState("");
    const contentRef = useRef(null);
    const [resizeListener, sizes] = useResizeAware();

    useEffect(() => {
        setHeight(isOpen ? contentRef.current.scrollHeight + 1 : 0);
    }, [sizes]);

    function toggleOpen() {
        setTransition("all 0.2s ease");
        setHeight(!isOpen ? contentRef.current.scrollHeight + 1 : 0);
        setIsOpen(!isOpen);
        setTimeout(() => {
            setTransition("");
        }, 200)
    }

    return (
        <div>
            <div onClick={toggleOpen} className="cursor-pointer">
                {props.label}
            </div>
            <div
                style={{
                    maxHeight: height,
                    position: "relative",
                    overflowY: "hidden",
                    transition: transition
                }}
                ref={contentRef}
                className={props.className}
            >
                {props.children}
                {resizeListener}
            </div>
        </div>
    )
}

Accordion.propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool,
    children: PropTypes.any.isRequired,
    label: PropTypes.any.isRequired
};

export default Accordion;