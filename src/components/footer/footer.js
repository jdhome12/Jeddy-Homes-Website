import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css'
function Footer (){
    return(
        <footer>
            <div className='footer-container'>
                <div className='footer-container1'>
                    <h1>
                        Contacts:
                    </h1>
                    <ul className='contact-details'>
                        <li><CallIcon fontSize='medium'/> <a href='tel:0894884884'>07XXXXXXXXX</a> </li>
                        <li><EmailIcon fontSize='medium'/> <a href='mail:support@jeddyhomes'>support@jeddyhomes.com</a></li>
                    </ul>
                    <div >
                    <h2>
                        Address:
                    </h2>
                    <p  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor purus non enim praesent.
                    </p>    
                </div>
                    <h2>Follow us on:</h2>
                    <ul className='socials-list'>                    
                        <li>
                            <XIcon fontSize='large'/>
                        </li>
                        <li>
                            <FacebookIcon fontSize='large'/>
                        </li>
                        <li>
                            <InstagramIcon fontSize='large' />
                        </li>
                        <li>
                            <LinkedInIcon fontSize='large' />
                        </li>
                    </ul>
                </div>
                <div className='footer-container2'>
                    <h1>Reach us:</h1>
                    <form className='footer-form'>
                        <div className='name-container'>
                            <div>
                                <label>First Name</label>
                                <input type='text' />
                            </div>
                            <div>
                                <label>Last name</label>
                                <input type='text' />
                            </div>                        
                        </div>
                        <div>
                            <label>Phone</label>
                            <input type='tel' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type='email' />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea>
                                Hi,
                            </textarea>
                        </div>
                        <div className='submmit-btn'>
                            <input type='submit' />
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}
export default Footer;