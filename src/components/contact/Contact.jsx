import React from 'react'
import './Contact.css'
import msg from '../../assets/msg.png' 
import location from '../../assets/location.png' 
import phone from '../../assets/phone.png' 
import mail from '../../assets/mail.png' 
import whitearrow from '../../assets/whitearrow.png' 


const Contact = () => {

    const [result, setResult] = React.useState('');
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending...");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "484e1661-4163-40c3-ae16-098e751d5ae9");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
        }   
    };

  return (
    <div className='contact'>
      <div className="contact-col">
            <h3>How to contact us <img src={msg} alt="" /></h3>
            <p>Feel free to reach out to us through our contact information below or through our contact form.
                Your inquiries, feedback and suggestions are important to us as we strive to provide exceptional
                service to everybody. We highly appreciate your input and we'll get back to you as soon as possible.
            </p>
            <ul>
                <li><img src={mail} alt="" /> admin@thewebsitetours.com</li>
                <li><img src={phone} alt="" /> +254 794 947794</li>
                <li><img src={location} alt="" /> 88 Kimani Avenue, Nairobi, Kenya.</li>
            </ul>
      </div>
      <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Phone Number' required />
                <label>Write your message</label>
                <textarea name="message" rows='6' placeholder='Enter Your Message'></textarea>
                <button type='submit' className='btn dark-btn'>Submit
                    <img src={whitearrow} alt="" />
                </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
