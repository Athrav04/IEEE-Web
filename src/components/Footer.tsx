const Footer = (props: { fb: string, ig: string, x: string, linkedIn: string })=>{
    return(
        <>
        <footer className="grid md:grid-cols-3 md:place-items-baseline bg-[#08090a] border-t-[0.5px] border-[#373737] text-white font-thin md:mx-9">
            <div className="m-7">
                <ul>
                    <p className="font-semibold md:my-7">Quick Links</p>
                    <div className="my-3">
                        <li className="md:my-1"><a href="/">Home</a></li>
                        <li className="md:my-1"><a href="/about">About</a></li>
                        <li className="md:my-1"><a href="/events">Events</a></li>
                        <li className="md:my-1"><a href="/contact">Contact</a></li>
                    </div>
                </ul>
            </div>
            <div className="mx-7">
                <ul>
                <p className="font-semibold md:my-7">Legal</p>
                <div className="my-3">
                    <li className="md:my-1"><a>Terms of Use</a></li>
                    <li className="md:my-1"><a>Privacy Policy</a></li>
                    <li className="md:my-1"><a>Cookies Policy</a></li>
                    <li className="md:my-1"><a>Sitemap</a></li>
                </div>
                </ul>
            </div>
            <div className="m-5 md:w-44">
                <ul>
                <p className="font-semibold">Connect With Us</p>
                <div className="my-3">
                    <li className="bg-[#ffffff] rounded flex my-3"><a className="text-black font-normal m-1.5" href={props.fb}><i className="fa-brands fa-facebook-f mx-2"></i>FaceBook</a></li>
                    <li className="bg-[#ffffff] rounded flex my-3"><a className="text-black font-normal m-1.5" href={props.ig}><i className="fa-brands fa-instagram mx-2"></i>Instagram</a></li>
                    <li className="bg-[#ffffff] rounded flex my-3"><a className="text-black font-normal m-1.5" href={props.x}><i className="fa-brands fa-x-twitter mx-2"></i>Twitter/ X</a></li>
                    <li className="bg-[#ffffff] rounded flex my-3"><a className="text-black font-normal m-1.5" href={props.linkedIn}><i className="fa-brands fa-linkedin-in mx-2"></i>LinkedIn</a></li>
                </div>
                </ul>
            </div>
        </footer>
        </>
    )
};


export default Footer;