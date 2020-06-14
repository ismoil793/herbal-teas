import React from 'react';

const About = () => {
   return (

       <section className="about-company">
          <div className="container">
             <div className="row">
                <div className="col-lg-12">

                   <div>


                      <iframe
                          width="1042"
                          height="586"
                          src="https://www.youtube.com/embed/YMwyLeyFecE" frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen>
                      </iframe>

                      <iframe
                          src="https://yandex.ru/map-widget/v1/?um=constructor%3A47b3a7f5b12aade7b9c0e4c6ea787b5d8628eab99c555635b3019ed6c6ef0b33&amp;source=constructor"
                          width="550"
                          height="445"
                          frameBorder="0">
                      </iframe>
                   </div>


                </div>
             </div>
          </div>
       </section>
   );
};

export default About;