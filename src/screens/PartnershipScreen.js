import { Link } from 'react-router-dom';

function PartnershipScreen() {
  return (
    <div>
      <h1>PARTNERSHIP</h1>
      <div>
        <div className="text-justify">
          Electrocity wants to help students, instructors, and hobbyist who are
          having trouble finding a low-cost electrical component that can be
          delivered quickly, whether it's through online stores or physical
          stores. (Note: For presentation purposes only) Through partnership
          schools/institutions/companies can get discount coupon when
          purchasing. Contact us for more details (Go to
          <Link to="/ContactUsScreen" className="linkfooter">
            Contact Page{' '}
          </Link>
          )
        </div>
      </div>
      <div>
        <h1>Student Discount</h1>

        <p className="Disclaimer">
          DISCLAIMER: number of discounts are further being studied
        </p>
        <div>
          • A 20% discount is granted for students with promo code given by the
          school upon purchase from the store.
        </div>

        <div>• For bulk orders (8-10 orders), a 30% discount is given.</div>
      </div>
    </div>
  );
}
export default PartnershipScreen;
