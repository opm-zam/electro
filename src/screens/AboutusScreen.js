import { Link } from 'react-router-dom';

function AboutusScreen() {
  return (
    <div>
      <h1>ABOUT US</h1>
      <div>
        <h1>ElectroCity</h1>
        <div className="text-justify">
          ElectroCity is an online business offering best quality electronic
          components in Zamboanga City, Philippines. This platform is open for
          computer hobbyist, computer instructors, students with
          computer-related courses and to anyone that is interested in inventing
          and innovating technology. Electrocity will serve as an aid to provide
          the insufficiency of electronic component supplies to customer’s
          needs, faster transaction, and to extend enough product promotion
          through partnership with different universities.
        </div>
      </div>
      <div>
        <h1>We Offer</h1>
        <div>
          • Electronic components – Microcontrollers, sensors, electronic parts,
          input/output devices, modules and many more based on what you will
          like to see in our store. Write suggestions in review box. . These
          components are initially tested to ensure you’ll get the best quality
          and performance.
        </div>
        <div>
          • Video tutorials – To assist you in getting started with your
          project, we give a brief video instruction on the page description of
          each product.
        </div>
        <div>
          • Partnership – To be more directly involved with the creative
          innovators in the city, we provide partnerships, particularly to
          schools and institutions. (Go to
          <Link to="/PartnershipScreen" className="linkfooter">
            {' '}
            Partnership page
          </Link>
          to learn more).
        </div>
        <div className="text-justify">
          • Fast Delivery – Our shop will send your item one day after you order
          it from our website and our delivery fee starts at Php 50.00. The
          charges may vary depending on the location between the shop and the
          location of the customer. Electrocity allowing you to complete your
          task efficiently!{' '}
        </div>
      </div>
      <div>
        <h1>Service Times</h1>
        <div>Monday to Saturday 09:00 to 18:00 (PHT)</div>
      </div>
    </div>
  );
}
export default AboutusScreen;
