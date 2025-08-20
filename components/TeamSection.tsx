import React from 'react';
import './TeamSection.css'; // Assuming you have a CSS file for styles

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">Meet Our Glam Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="Team Member 1" className="member-photo" />
            <h3 className="member-name">Jane Doe</h3>
            <p className="member-role">Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/images/team2.jpg" alt="Team Member 2" className="member-photo" />
            <h3 className="member-name">John Smith</h3>
            <p className="member-role">Creative Director</p>
          </div>
          <div className="team-member">
            <img src="/images/team3.jpg" alt="Team Member 3" className="member-photo" />
            <h3 className="member-name">Emily Johnson</h3>
            <p className="member-role">Marketing Manager</p>
          </div>
          <div className="team-member">
            <img src="/images/team4.jpg" alt="Team Member 4" className="member-photo" />
            <h3 className="member-name">Michael Brown</h3>
            <p className="member-role">Product Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;