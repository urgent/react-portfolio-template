import React from "react"

const Parallax = ({ children }) => {
    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <div className=" parallax-container" id="parallax">
            <div className="parallax-content">
                <div style={{ position: "sticky", right: "0", top: "0" }}>
                    <div style={{ position: "absolute", right: "0", top: "15rem" }} >
                        <img src="https://cataas.com/cat" style={{ maxWidth: "200px" }} />
                    </div>
                </div>
                <div style={{ maxWidth: "780px" }}> {children} </div>
            </div>
        </div >)
}

export default Parallax;