import React from 'react';

const ContactForm = () => {
   return (
       <section className="ftco-section contact-section bg-light">
          <div className="container">
             <div className="row d-flex mb-5 contact-info">
                <div className="w-100"></div>
                <div className="col-md-3 d-flex">
                   <div className="info bg-white p-4">
                      <p><span>Адрес:</span> Ташкентская область, Ташкентский район, Тюльпан, тысяча родников дом
                         25</p>
                   </div>
                </div>
                <div className="col-md-3 d-flex">
                   <div className="info bg-white p-4">
                      <p><span>Телефон:</span>
                         <a href="tel:+998909710360" className="text">+998 90 971 03 60</a>
                      </p>
                   </div>
                </div>
                <div className="col-md-3 d-flex">
                   <div className="info bg-white p-4">
                      <p><span>Email:</span>
                         <div>
                            <a href="mailto:abdulazizsh0360@gmail.com" className="text">abdulazizsh0360@gmail.com</a>
                         </div>
                      </p>
                   </div>
                </div>
                <div className="col-md-3 d-flex">
                   <div className="info bg-white p-4">
                      <p><span>Website</span> <a href="#" target="_blank">yoursite.com</a></p>
                   </div>
                </div>
             </div>
             <div className="row block-9">
                <div className="col-md-6 order-md-last">
                   <form action="https://submit-form.com/9_ZvOMAd2jMWED29dz8u-" target="_self" className="bg-white p-4 contact-form">
                      <h3 style={{color: "#88AD3F"}}>Свяжитесь с нами</h3>
                      <div className="form-group">
                         <input type="text" name="Name" required={true} className="form-control" placeholder="Ваше имя"/>
                      </div>
                      <div className="form-group">
                         <input type="email" name="Email" required={true} className="form-control" placeholder="Ваш Email"/>
                      </div>
                      <div className="form-group">
                         <input type="text" name="Subject" required={true} className="form-control" placeholder="Тема"/>
                      </div>
                      <div className="form-group">
                            <textarea name="Message" id="" required={true} cols="30" rows="7" className="form-control"
                                      placeholder="Сообщение" />
                      </div>
                      <div className="form-group">
                         <input type="submit" value="Отправить" className="btn btn-primary py-3 px-5"/>
                      </div>
                   </form>

                </div>

                <div className="col-md-6 d-flex">
                   <div id="map" className="bg-white">
                      <iframe
                          src="https://yandex.ru/map-widget/v1/?um=constructor%3A47b3a7f5b12aade7b9c0e4c6ea787b5d8628eab99c555635b3019ed6c6ef0b33&amp;source=constructor"
                          frameBorder="0"
                          width="100%"
                          height="572"
                      >
                      </iframe>
                   </div>
                </div>
             </div>
          </div>
       </section>
   );
};

export default ContactForm;