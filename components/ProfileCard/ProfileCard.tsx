// src/components/ProfileCard.jsx

const ProfileCard = () => {
  return (
      <div style={styles.card}>
        <h2 style={styles.name}>Leslie Alexander</h2>
        <p style={styles.title}>Graphic Designer</p>
        <div style={styles.rating}>
          <span style={styles.ratingValue}>4.8</span>
          <span style={styles.reviewCount}>(Review 2K)</span>
        </div>
        <div style={styles.courseInfo}>
          <span style={styles.courseCount}>120 Video Course</span>
          <span style={styles.studentCount}>15k Students</span>
        </div>
      </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  name: {
    fontSize: '24px',
    margin: '0 0 8px',
  },
  title: {
    fontSize: '16px',
    color: '#666',
    margin: '0 0 16px',
  },
  rating: {
    marginBottom: '16px',
  },
  ratingValue: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  reviewCount: {
    fontSize: '14px',
    color: '#666',
    marginLeft: '8px',
  },
  courseInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#666',
  },
  courseCount: {
    marginRight: '8px',
  },
  studentCount: {
    marginLeft: '8px',
  },
};

export default ProfileCard;