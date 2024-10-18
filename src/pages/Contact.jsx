const Contact = () => {
  return(       
      
      <div className="contact">
        <h1>Contact Me</h1>

            <form action="" className="contact-form">
              <div className="contact-div">
              <input type="text"  placeholder="Digite seu nome" />
              </div>

              <div className="contact-div">
              <input type="text"  placeholder="E-mail" />
              </div>

              <div className="contact-div">
              <textarea name="" id="" cols="70" rows="10"></textarea>
              </div>
            </form>
      </div>

  );
};

export default Contact;