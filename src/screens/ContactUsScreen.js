function ContactUsScreen() {
  return (
    <div>
      <h1>CONTACT US</h1>
      <div>
        <div className="text-justify">
          For questions, business inquiries, and support, you may contact us
          through:
        </div>

        <div>Mobile Number: 0912-345-8901 </div>
        <div>Telephone: 1234-5678 </div>
        <div>Gmail Account: ElectroCity2022@gmail.com</div>
        <div>
          Facebook Page:
          <a
            className="ContactUs"
            href="https://www.facebook.com/Electrocity2022/"
          >
            {' '}
            @Electrocity2022
          </a>
        </div>
        <div>
          Instagram:
          <a
            className="ContactUs"
            href="https://instagram.com/electrocity.2022?igshid=YmMyMTA2M2Y="
          >
            {' '}
            @Electrocity.2022
          </a>
        </div>

        <div>Please feel free to contact us.</div>
      </div>
      <div></div>
    </div>
  );
}
export default ContactUsScreen;
