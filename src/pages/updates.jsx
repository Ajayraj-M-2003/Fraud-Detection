import React from 'react';
import '../components/updates.css'; // Import your component-specific CSS file

const Updates = () => {
  return (
    <div className="update-container">
      <header className="update-header">
        <h1 className="update-header_title">What's New </h1>
        <p className="update-header_description">"Our cutting-edge technology harnesses Artificial Intelligence to analyze millions of data points, ensuring the success of your project."</p>
      </header>

      <main className="update-card_grid">
        <section className="update-card update-cyan">
          <h2 className="update-card_title">Bug Fix</h2>
          <p className="update-card_content"> Fixed a bug where certain users were unable to log in due to a server-side issue. All users should now be able to access their accounts without any problems.</p>
          <img className="update-card_img" src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-supervisor.svg" alt="Supervisor" />
        </section>

        <section className="update-card update-red">
          <h2 className="update-card_title">Security Enhancement</h2>
          <p className="update-card_content">Implemented stronger encryption algorithms to further secure user passwords and sensitive data stored on our servers.</p>
          <img className="update-card_img" src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-team-builder.svg" alt="page-home" />
        </section>

        <section className="update-card update-blue">
          <h2 className="update-card_title">Performance Boost</h2>
          <p className="update-card_content">Users can now experience smoother and faster navigation throughout the application.</p>
          <img className="update-card_img" src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-karma.svg" alt="Karma" />
        </section>

        <section className="update-card update-orange">
          <h2 className="update-card_title">User Interface Update</h2>
          <p className="update-card_content">Refined user interface across the platform, improving navigation and accessibility to key functionalities.</p>
          <img className="update-card_img" src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-calculator.svg" alt="Calculator" />
        </section>
      </main>
    </div>
  );
};

export default Updates;
