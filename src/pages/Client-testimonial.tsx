// Testimonial.jsx
import React from "react";
import "./Client-testimonial.css";

const ClientTestimonial = () => {
  return (
    <div className="testimonial-grid">
      {/* Card 1 */}
      <div className="testimonial-box box1">
        <div className="testimonial-image">
          <img
            src="https://i0.wp.com/simtrak.in/wp-content/uploads/2023/09/weeho-removebg-preview.png?fit=300%2C102&ssl=1"
            alt="Weeho"
          />
        </div>
        <div className="testimonial-content">
          <h3>Weeho</h3>
          {/* <p className="position">CEO, AGENCY</p> */}
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="stars">★★★★★</div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="testimonial-box box2">
        <div className="testimonial-image">
          <img
            src="https://i0.wp.com/simtrak.in/wp-content/uploads/2023/05/Final-logo.png?resize=300&ssl=1E"
            alt="ADORE"
          />
        </div>
        <div className="testimonial-content">
          <h3>ADORE</h3>
          {/* <p className="position">FOUNDER, COMPANY</p> */}
          <p className="text">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="stars">★★★★★</div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="testimonial-box box3">
        <div className="testimonial-image">
          <img
            src="https://i0.wp.com/simtrak.in/wp-content/uploads/2023/10/client.jpg?w=300&ssl=1"
            alt="ClienTell"
          />
        </div>
        <div className="testimonial-content">
          <h3>ClienTell</h3>
          {/* <p className="position">MANAGER, BUSINESS</p> */}
          <p className="text">
            In the last year, we have established two non-profit organizations SAWEC both in Canada and the USA. We have volunteers located in three countries, Canada, India, and the USA. Simtrak Solutions led by Simran Sharma manages a number of tasks for SAWEC such as website management, coordination with volunteers and board, meeting the statutory requirements, and conducting the meetings. Simtrak’s turnaround time is very short and accurate and they are very reliable, energetic, and enthusiastic. Without Simtrak’s help, we wouldn’t have conducted our affairs very smoothly.
          </p>
          <div className="stars">★★★★★</div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="testimonial-box box4">
        <div className="testimonial-image">
          <img
            src="https://i0.wp.com/simtrak.in/wp-content/uploads/2023/05/logo-orange-e1696652807805.png?fit=300%2C121&ssl=1"
            alt="LULA"
          />
        </div>
        <div className="testimonial-content">
          <h3>LULA</h3>
          {/* <p className="position">DIRECTOR, BRAND</p> */}
          <p className="text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="stars">★★★★★</div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;