function TeamScreen() {
  return (
    <div>
      <h1>OUR TEAM</h1>
      <div>
        <h1>BS CpE IV</h1>
        <div className="text-justify">
          Our team is composed of Computer Engineering students who are
          dedicated entrepreneurs that has experience in handling electronic
          components.
        </div>

        <div className="Pictures">
          <img
            src="/images/PARCON.png"
            alt="Crisabel F. Parcon"
            className="Cris"
          />

          <img
            src="/images/GASPAR.png"
            alt="Marinella E. Gaspar"
            className="Ella"
          />
          <img
            src="/images/BIENES.png"
            alt="Kimberly G. Bienes"
            className="Kim"
          />
        </div>
        <div className="names">
          <h4 className="fontteam">Crisabel F. Parcon</h4>
          <h4 className="fontteam">Marinella E. Gaspar</h4>
          <h4 className="fontteam">Kimberly G. Bienes</h4>
        </div>
      </div>
    </div>
  );
}
export default TeamScreen;
