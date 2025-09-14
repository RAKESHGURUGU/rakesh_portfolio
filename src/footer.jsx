import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

function Footer() {
    return (
        <footer>
            <p>Contact: gurugurakesh9@gmail.com || +91 7396257998</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "10px" }}>
                <a href="https://www.instagram.com/rakesh_gurugu?igsh=MTk5MDQxbjQxNmt0OA==">
                    <FaInstagram size={24} color="#E4405F" />
                </a>
                <a href="https://linkedin.com/in/your_linkedin">
                    <FaLinkedin size={24} color="#0077B5" />
                </a>
                <a href="https://github.com/RAKESHGURUGU">
                    <FaGithub size={24} color="#333" />
                </a>
                <a href="https://leetcode.com/u/gurugurakesh9/">
                    <SiLeetcode size={24} color="#FFA116" />
                </a>
                <a href="https://www.hackerearth.com/@rakeshgurugu/">
                    <SiHackerrank size={24} color="#2EC866" />
                </a>
                <a href="https://www.codechef.com/users/gurugurakesh">
                    <SiCodechef size={24} color="#5B4638" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
