import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
export default function NavBar() {
    return (
        <>
            <header>
                <div class="nav-bar">
                    <nav>
                        <NavLink to="/">
                            Joseph
                        </NavLink>
                        <NavLink to="/post"> Blog Posts
                        </NavLink>
                        <NavLink to="/project">
                            Projects
                        </NavLink>
                        <NavLink to="/about">
                            ?About Me!
                        </NavLink>
                    </nav>

                    <div className="mediaBar">
                        <SocialIcon url="https://twitter.com/JosephPanetta2" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                        <SocialIcon url="https://www.facebook.com/Jlpanetta1681/" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                        <SocialIcon url="https://github.com/jlpanetta1681" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                        <SocialIcon url="https://linkedin.com/in/jlpanetta1681" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    </div>
                </div >
            </header >
        </>
    )
}

