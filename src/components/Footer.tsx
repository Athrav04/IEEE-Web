const Footer = ()=>{
    return(
        <>
        <footer className="grid grid-cols-3 place-items-center bg-[#0A0A0A] border-t-[0.5px] border-[#373737] text-white font-thin">
            <div className="m-5">
                <ul>
                    <p className="font-normal">Quick Links</p>
                    <div className="my-3">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </div>
                </ul>
            </div>
            <div className="m-5">
                <ul>
                <p className="font-semibold">Connect With Us</p>
                <div className="my-3">
                    <li><a>Facebook</a></li>
                    <li><a>Twitter</a></li>
                    <li><a>Instagram</a></li>
                    <li><a>LinkedIn</a></li>
                </div>
                </ul>
            </div>
            <div className="m-5">
                <ul>
                <p className="font-semibold">Legal</p>
                <div className="my-3">
                    <li><a>Terms of Use</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Cookies Policy</a></li>
                    <li><a>Sitemap</a></li>
                </div>
                </ul>
            </div>
        </footer>
        </>
    )
};


export default Footer;