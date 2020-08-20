import React from "react";
import ReactDOM from "react-dom";
import Accordion from "../index.js";

function Demo() {
    return (
        <div style={{
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            <h1>React Robust Accordion</h1>
            <p>A simple, robust accordion component for React (<a href="https://github.com/wwsalmon/react-robust-accordion">GitHub</a>, <a href="">npm</a>). Made by Samson Zhang (<a
                href="https://github.com/wwsalmon">GitHub</a>, <a href="https://twitter.com/wwsalmon">Twitter</a>, <a
                href="https://www.samsonzhang.com/">website</a>). Install with <code>npm i react-robust-accordion</code>.
            </p>
            <Accordion
                label={<p className="accordion label">This is where everything you put in the <code>label</code> prop
                    goes. Click on me!</p>}>
                <div className="accordion content">
                    <p>This is where everything wrapped in <code>&lt;Accordion&gt;</code> tags goes. Put anything you
                        want here, too! Even...<br/><br/></p>
                    <Accordion label={<p className="accordion label">Another nested accordion. Click on me!</p>}>
                        <p className="accordion content-diff">It's nesting doll season</p>
                    </Accordion>
                </div>
            </Accordion>
            <Accordion label={(
                <p className="accordion label-diff" style={{
                    marginTop: 16,
                }}>Stupid simple to use - it just works.</p>
            )} open={true}>
                <div className="accordion content-diff">
                    <p>Here's what the code looks like:</p>
                    <code style={{
                        backgroundColor: "#222222",
                        display: "block",
                        marginTop: 16,
                        marginBottom: 16,
                        padding: 8,
                        color: "white"
                    }}>
                        {`<Accordion label=\{<p>Put what you want to show when collapsed here!</p>}><p>Put what you want to show when expanded here!</p></Accordion>`}
                    </code>
                    <p>Place accordions next to each other, within each other, whatever you want to do -- you can trust
                        that it'll work exactly how you expect, and it'll stay out of your way.</p>
                </div>
            </Accordion>
        </div>
    );
};

ReactDOM.render(<Demo/>, document.getElementById("root"));