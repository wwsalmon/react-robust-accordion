import React, {useEffect, useRef, useState} from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";

const Accordion = (props) => {
    const [isOpen, setIsOpen] = useState(props.setOpenState ? props.openState : (props.open || false));
    const [height, setHeight] = useState(0);
    const [transition, setTransition] = useState("");
    const contentRef = useRef(null);
    const [resizeListener, sizes] = useResizeAware();

    useEffect(() => {
        toggleOpen();
    }, [props.openState]);

    useEffect(() => {
        setHeight(isOpen ? contentRef.current.scrollHeight + 1 : 0);
    }, [sizes]);

    function toggleOpen(e = null) {
        setTransition("all 0.2s ease");
        setHeight(!isOpen ? contentRef.current.scrollHeight + 1 : 0);

        if (props.setOpenState && e) {
            props.setOpenState(!isOpen);
        } else if (props.setOpenState) {
            setIsOpen(props.openState);
        } else {
            setIsOpen(!isOpen);
        }

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
    openState: PropTypes.bool,
    setOpenState: PropTypes.func,
    children: PropTypes.any.isRequired,
    label: PropTypes.any.isRequired
};

export default Accordion;