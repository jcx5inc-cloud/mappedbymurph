const featuredTrips = [
  {
    title: "Italian Summer Escape",
    location: "Amalfi Coast, Italy",
    description:
      "Cliffside hotels, private transfers, incredible dining, and a seamless luxury itinerary from arrival to departure.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Powder & Après Week",
    location: "Aspen, Colorado",
    description:
      "Premium lodging, ski logistics, elevated après reservations, and a smooth group experience from start to finish.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Overwater Anniversary Journey",
    location: "Maldives",
    description:
      "Romantic villas, private excursions, and once-in-a-lifetime touches designed around your biggest moments.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80"
  }
];

const reviews = [
  {
    name: "Emily & Jake",
    quote:
      "Mapped By Murph planned the smoothest trip we’ve ever taken. Every hotel, transfer, dinner, and excursion felt perfectly chosen for us."
  },
  {
    name: "The Harrison Group",
    quote:
      "Coordinating a big group should have been chaos. Instead, everything felt effortless, polished, and elevated."
  },
  {
    name: "Danielle R.",
    quote:
      "I explained the feeling I wanted for my honeymoon, and they turned it into a trip better than anything I could have planned myself."
  }
];

const services = [
  {
    title: "Luxury Vacation Planning",
    text:
      "Tailored itineraries for beach escapes, European summers, romantic getaways, and iconic bucket-list trips."
  },
  {
    title: "Honeymoons & Celebrations",
    text:
      "Trips designed around milestone moments, with thoughtful details and unforgettable experiences."
  },
  {
    title: "Group & Family Travel",
    text:
      "Complex travel made simple with coordinated hotels, transfers, pacing, and experiences for everyone."
  },
  {
    title: "Concierge-Level Support",
    text:
      "Destination advice, reservations, logistics, and trusted guidance before and during your trip."
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="overlay" />
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury travel destination"
        />
        <div className="hero-content container">
          <div className="eyebrow">Mapped By Murph</div>
          <h1>Travel that feels effortless, elevated, and entirely yours.</h1>
          <p className="hero-text">
            Custom luxury travel planning for honeymoons, ski escapes, group
            getaways, milestone trips, and unforgettable vacations built around
            exactly how you want to travel.
          </p>
          <div className="hero-actions">
            <a href="#inquire" className="button button-primary">
              Start Planning
            </a>
            <a href="#featured" className="button button-secondary">
              Explore Featured Trips
            </a>
          </div>
          <div className="stats">
            <div className="stat">
              <strong>250+</strong>
              <span>Custom itineraries</span>
            </div>
            <div className="stat">
              <strong>100+</strong>
              <span>Luxury experiences</span>
            </div>
            <div className="stat">
              <strong>35+</strong>
              <span>Destinations booked</span>
            </div>
            <div className="stat">
              <strong>White-glove</strong>
              <span>Client experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="intro container">
        <div className="intro-grid">
          <div className="intro-card">
            <h3>Tell us your travel vision</h3>
            <p>
              Share the destination, occasion, style, and level of support you
              want.
            </p>
          </div>
          <div className="intro-card">
            <h3>Receive a curated plan</h3>
            <p>
              Get destination guidance, hotel options, trip flow, and
              recommendations tailored to you.
            </p>
          </div>
          <div className="intro-card">
            <h3>Travel with confidence</h3>
            <p>
              Enjoy a smooth, elevated experience backed by expert planning and
              thoughtful details.
            </p>
          </div>
        </div>
      </section>

      <section id="featured" className="section container">
        <div className="section-heading">
          <span className="pill">Featured Trips</span>
          <h2>Recent trips worth showing off</h2>
          <p>
            Lead with dream destinations and signature bookings so visitors
            immediately understand the quality of trips you plan.
          </p>
        </div>

        <div className="trip-grid">
          {featuredTrips.map((trip) => (
            <article className="trip-card" key={trip.title}>
              <div className="trip-image-wrap">
                <img src={trip.image} alt={trip.title} className="trip-image" />
                <div className="trip-image-overlay" />
                <div className="trip-image-text">
                  <span>{trip.location}</span>
                  <h3>{trip.title}</h3>
                </div>
              </div>
              <div className="trip-copy">
                <p>{trip.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading light">
            <span className="pill dark-pill">Services</span>
            <h2>Built to convert visitors into inquiries</h2>
            <p>
              The strongest travel sites combine aspiration with trust. This
              structure gives you both.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="why-grid">
          <div>
            <span className="pill">Why Clients Book</span>
            <h2>You are selling expertise, not just hotels and flights</h2>
            <p className="why-text">
              The value is in the recommendations, the time saved, the better
              options, the smoother logistics, and a trip that feels personal
              from beginning to end.
            </p>
            <ul className="benefits">
              <li>Personalized destination and hotel matching</li>
              <li>Stronger planning for honeymoons, groups, and celebrations</li>
              <li>Trusted recommendations tailored to each traveler</li>
              <li>A smoother experience before and during the trip</li>
            </ul>
          </div>

          <div className="gallery-grid">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80"
              alt="Travel inspiration"
              className="gallery-large"
            />
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80"
              alt="Travel inspiration"
            />
            <img
              src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1000&q=80"
              alt="Travel inspiration"
            />
          </div>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="container">
          <div className="section-heading">
            <span className="pill">Client Reviews</span>
            <h2>Trust is what closes premium travel clients</h2>
            <p>
              Replace these with your real reviews and this section becomes one
              of your strongest conversion points.
            </p>
          </div>

          <div className="review-grid">
            {reviews.map((review) => (
              <div className="review-card" key={review.name}>
                <div className="stars">★★★★★</div>
                <p>“{review.quote}”</p>
                <strong>{review.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquire" className="section inquire-section">
        <div className="container inquire-grid">
          <div>
            <span className="pill dark-pill">Start Planning</span>
            <h2>Ready to plan something unforgettable?</h2>
            <p className="inquire-text">
              This form is set up as a polished lead capture section. For now it
              is visual only. After the site is live, we can connect it to your
              email, Google Forms, HubSpot, or another inquiry flow.
            </p>
            <div className="contact-lines">
              <div>(555) 555-5555</div>
              <div>hello@mappedbymurph.com</div>
              <div>@mappedbymurph</div>
            </div>
          </div>

          <form className="contact-form">
            <div className="two-col">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Destination or trip idea" />
            <div className="two-col">
              <input type="text" placeholder="Estimated budget" />
              <input type="text" placeholder="Desired travel dates" />
            </div>
            <textarea
              placeholder="Tell us about your trip, who is going, and what matters most to you..."
              rows="6"
            />
            <button type="button" className="button button-primary full">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="eyebrow dark">Mapped By Murph</div>
            <p>
              Custom travel planning for clients who want more than a generic
              trip.
            </p>
          </div>
          <div>© 2026 Mapped By Murph. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
