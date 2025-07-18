import './contact.css';
import { useState } from 'react';

const Contact = () => {
  const [result,setResult] = useState("")
  const [displayStatus, setDisplayStatus] = useState(false);
  const [error,setError] = useState(false);
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData(e.target);

    formData.append("access_key","03fdcf80-c538-47ec-8270-005054f2fbbb")
    const response = await fetch("https://api.web3forms.com/submit",{
      method:'POST',
      body:formData
    });
    const data = await response.json();
    if(data.success){
      setResult("Form Submitted Successfully, Looking forward to talking with you!")
      e.target.reset()
      setError(false);
    }
    else{
      console.error("Error:",data)
      setResult("Error Submitting Form, please reach out to me manually at metzgerben618@gmail.com");
      setError(true);
    }
    setDisplayStatus(true);
  }


  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get in Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Connect with me!</h3>
          <p className="contact__details">Feel free to reach out by email.</p>
        </div>

        <form action="" className='contact__form' onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Enter your name' name='name' required/>
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Enter your email' name='email' required/>
            </div>
          </div>
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Enter your subject line'/>
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea name="message" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message' required></textarea>
            </div>
          
            <button className="btn" type='submit'>Send your message!</button>
          </form>
          
      </div>
      {displayStatus && 
          <div className={`contact__status ${error ? "status__fail":"status__success"}`}>
            <span className="status__msg">{result}</span>
          </div>
          }
    </section>
  )
}

export default Contact