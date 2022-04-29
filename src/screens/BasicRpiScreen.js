function BasicRpiScreen() {
  return (
    <div>
      <h1 className="BasicArduinoHeader">BASIC RASPBERRY PI TUTORIALS</h1>
      <div>
        <video width="320" height="240" controls>
          <source
            src="images/How-to-blink-a-LED.mp4"
            type="video/mp4"
            className="Video"
          />
        </video>

        <div className="Template">
          <h4 className="Template">Insert Video..</h4>
        </div>

        <div className="Template2">
          <h4 className="Template2">Insert Video..</h4>
        </div>
      </div>
      <div className="V1">
        <h4 className="V1">How to blink a LED</h4>
      </div>
    </div>
  );
}
export default BasicRpiScreen;
