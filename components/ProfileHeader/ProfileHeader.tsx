import Image from "../../assets/images/Profile/avatar.png"
const ProfileHeader = () => {

  return (
      <div className="container my-4 border-bottom pb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
                src={Image}
                alt="Profile"
                className="rounded-circle me-3"
                style={{ width: "80px", height: "80px" }}
            />
            <div>
              <h2 className="mb-0">Sofia Bravo</h2>
              <p className="text-muted mb-0">
                <span className="text-danger">★★★★★</span> 4.8 (280)
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="text-center me-4">
              <h4 className="text-success fw-bold mb-0">7</h4>
              <p className="text-muted small">CURSOS</p>
            </div>
            <div className="text-center me-4">
              <h4 className="text-success fw-bold mb-0">2</h4>
              <p className="text-muted small">COMPLETADOS</p>
            </div>
            <div className="text-center">
              <h4 className="text-success fw-bold mb-0">1</h4>
              <p className="text-muted small">CERTIFICADOS</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileHeader;
