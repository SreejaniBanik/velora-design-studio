import './App.css';
import axios from "axios";
import { useState } from "react";


function App() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: "",
    message: ""
  });
   const [showMore, setShowMore] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/add-lead",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        phone: "",
        business: "",
        message: ""
      });

    }

    catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  };

  return (

    <div>

     {/* ================= NAVBAR ================= */}

<nav className="navbar">

  <div className="logo-box">

  <img
    src="/images/velora-logo1.png"
    alt="Velora Logo"
    className="navbar-logo"
  />

</div>


  <ul className="nav-links">

    <li>
      <a href="#hero">
        HOME
      </a>
    </li>

    <li>
      <a href="#services">
        SERVICES
      </a>
    </li>

    <li>
      <a href="#howitworks">
        PROCESS
      </a>
    </li>

    <li>
      <a href="#recentworks">
        RECENT WORKS
      </a>
    </li>

    <li>
      <a href="#packages">
        PACKAGES
      </a>
    </li>

    <li>
      <a href="#testimonials">
        REVIEWS
      </a>
    </li>

    <li>
      <a href="#contact">
        CONTACT
      </a>
    </li>

  </ul>


  <a
    href="https://wa.me/919874714009"
    target="_blank"
    rel="noreferrer"
  >

    <button className="wp-btn">

      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="whatsapp"
        className="wp-icon"
      />

      WhatsApp

    </button>

  </a>

</nav>


      {/* ================= HERO SECTION ================= */}

      <section className="hero-section" id="hero">

        {/* LEFT SIDE */}

        <div className="hero-left">

          <h1>
            Helping Local Businesses
            <br />
            Look Professional!
            <br />
            Stand Out, Grow More.
          </h1>

          <div className="yellow-line"></div>

          <p>
            We design Logos, Catalogues,
            Menus and Branding Materials
            that make your business look
            premium and trusted.
          </p>


         

        </div>



        {/* RIGHT SIDE */}

        <div className="hero-right">


          <div className="design-showcase">

  <img
    src="/images/hero-design.png"
    alt="Velora Showcase"
    className="hero-main-image"
  />

</div>

        </div>

      </section>



  {/* ================= SERVICES ================= */}

<section className="services-section" id="services">

  <div className="services-heading">

    <p>WHAT WE DESIGN</p>

  </div>


  <div className="services-boxes">


    {/* BOX 1 */}

    <div className="service-sketch-box">

      <div className="service-icon">
        ✒
      </div>

      <h3>LOGO DESIGN</h3>

      <p>
        Unique logos that
        build your brand identity.
      </p>

    </div>



    {/* BOX 2 */}

    <div className="service-sketch-box">

      <div className="service-icon">
        📖
      </div>

      <h3>CATALOGUES</h3>

      <p>
        Beautiful product
        catalogues that attract customers.
      </p>

    </div>



    {/* BOX 3 */}

    <div className="service-sketch-box">

      <div className="service-icon">
        🍽
      </div>

      <h3>MENUS</h3>

      <p>
        Creative menu cards
        for restaurants and cafes.
      </p>

    </div>



    {/* BOX 4 */}

    <div className="service-sketch-box">

      <div className="service-icon">
        📱
      </div>

      <h3>SOCIAL MEDIA</h3>

      <p>
        Eye-catching posts
        for your social media.
      </p>

    </div>



    {/* BOX 5 */}

    <div className="service-sketch-box">

      <div className="service-icon">
        🌐
      </div>

      <h3>WEB DESIGN</h3>

      <p>
        Simple modern websites
        for your business.
      </p>

    </div>



    {/* BOX 6 */}

    <div className="service-sketch-box">

      <div className="service-icon">
        •••
      </div>

      <h3>AND MORE</h3>

      <p>
        Flyers, banners,
        visiting cards and more.
      </p>

    </div>

  </div>

</section>

{/* ================= HOW IT WORKS ================= */}

<section className="how-section" id="howitworks">

  <div className="works-heading">

    <p>HOW IT WORKS</p>

  </div>


  <div className="works-container">


    {/* STEP 1 */}

    <div className="work-box">

      <div className="work-icon">
        💬
      </div>

      <h3>WHATSAPP</h3>

      <p>
        Message me on
        WhatsApp with
        your requirements.
      </p>

    </div>


    <div className="arrow">
      →
    </div>



    {/* STEP 2 */}

    <div className="work-box">

      <div className="work-icon">
        💭
      </div>

      <h3>DISCUSS</h3>

      <p>
        We discuss ideas
        and finalize your
        business needs.
      </p>

    </div>


    <div className="arrow">
      →
    </div>



    {/* STEP 3 */}

    <div className="work-box">

      <div className="work-icon">
        ✏️
      </div>

      <h3>DESIGN</h3>

      <p>
        I create the best
        design for your
        brand.
      </p>

    </div>


    <div className="arrow">
      →
    </div>



    {/* STEP 4 */}

    <div className="work-box">

      <div className="work-icon">
        ☁️
      </div>

      <h3>DELIVER</h3>

      <p>
        You get final files
        ready to use for
        your business.
      </p>

    </div>

  </div>

</section>

{/* ================= OUR WORK ================= */}

<section className="recent-works-section" id="recentworks">

  <div className="recent-title">

  <h2>
    RECENT WORKS
  </h2>

  <div className="recent-line"></div>

</div>


  {/* PROJECT 1 */}

  <div className="work-project">

    <div className="work-text">

      <h3>SnugMug Cafe Branding</h3>

      <p>
        Client wanted a cozy and aesthetic coffee
        shop logo that gives warm and calm vibes.
        We used earthy brown tones, modern circular
        design and minimal typography to create
        a premium cafe identity.
      </p>

    </div>


    <div className="work-image">

      <a
        href="/images/snugmug-logo.png"
        target="_blank"
        rel="noreferrer"
      >

        <img
          src="/images/snugmug-logo.png"
          alt="SnugMug Logo"
        />

      </a>

    </div>

  </div>



  {/* PROJECT 2 */}

<div className="work-project">

    <div className="work-image">

      <a
        href="/images/restaurant-menu.png"
        target="_blank"
        rel="noreferrer"
      >

        <img
          src="/images/restaurant-menu.png"
          alt="Restaurant Menu"
        />

      </a>

    </div>


    <div className="work-text">

      <h3>Mom's Aroma Menu Design</h3>

      <p>
        The cafe owner wanted a clean and warm
        looking menu card that feels homely,
        aesthetic and easy to read. We designed
        a modern cafe menu using soft earthy tones
        and organized food sections.
      </p>

    </div>

  </div>

{/* PROJECT 4 */}

<div className="work-project">

  <div className="work-image">

    <a
      href="/images/shanghai-salon.png"
      target="_blank"
      rel="noreferrer"
    >

      <img
        src="/images/shanghai-salon.png"
        alt="Shanghai Salon"
      />

    </a>

  </div>


  <div className="work-text">

    <h3>Shanghai Beauty Salon</h3>

    <p>
      Client wanted a feminine Chinese-inspired
      beauty salon branding exclusively for women.
      Soft pink shades, cherry blossom aesthetics
      and elegant Asian-inspired artwork were used
      to create a luxurious and calming identity.
    </p>

  </div>

</div>

  <div className="more-work-btn-box">

  <button
  className="more-work-btn"
  onClick={() => setShowMore(!showMore)}
>

  {showMore ? "Show Less" : "Explore More Designs"}

</button>
{
  showMore && (

    <div>


      {/* PROJECT 5 */}

<div className="work-project">

  <div className="work-text">

    <h3>Sen's Jewellery Branding</h3>

    <p>
      The jewellery brand wanted a luxurious
      and royal identity using elegant gold
      tones and premium typography. The final
      design gives a timeless luxury jewellery
      aesthetic for modern customers.
    </p>

  </div>


  <div className="work-image">

    <a
      href="/images/sens-jewellery.png"
      target="_blank"
      rel="noreferrer"
    >

      <img
        src="/images/sens-jewellery.png"
        alt="Sen Jewellery"
      />

    </a>

  </div>

</div>


{/* BOHO JEWELLERY POST */}

<div className="work-project">

  <div className="work-text">

    <h3>TheBohoBeadCo Social Media Post</h3>

    <p>
      A handmade jewellery page, TheBohoBeadCo Handmade Collection, wanted an eye-catching Instagram promotional post showcasing their new handmade collection with modern social media aesthetics, elegant branding, and a stylish boho-inspired design. The jewellery used in the post was provided by the client to maintain authenticity and match their brand identity perfectly.
    </p>

  </div>


  <div className="work-image">

    <a
      href="/images/thebohobeadco-post.png"
      target="_blank"
      rel="noreferrer"
    >

      <img
        src="/images/thebohobeadco-post.png"
        alt="Boho Jewellery"
      />

    </a>

  </div>

</div>



      {/* PROJECT 7 */}

      

<div className="work-project">

  <div className="work-image">

    <a
      href="/images/suman-hotels.png"
      target="_blank"
      rel="noreferrer"
    >

      <img
        src="/images/suman-hotels.png"
        alt="Suman Hotels"
      />

    </a>

  </div>


  <div className="work-text">

    <h3>Suman Hotels Visiting Card</h3>

    <p>
      A hotel in Mayapur wanted a luxury
      hospitality themed visiting card with
      warm gold aesthetics, premium typography
      and clean hotel branding that builds
      customer trust instantly.
    </p>

  </div>

</div>

    </div>

  )
}

</div>
</section>

{/* ================= PACKAGES ================= */}

<section className="packages-section" id="packages">

  <h2 className="package-title">
    OUR PACKAGES
  </h2>

  <div className="package-line"></div>


  <div className="packages-container">


    {/* STARTER */}

    <div className="package-card">

      <h3>STARTER</h3>

      <p>
        Logo + 2 Posts
      </p>

      <h1>₹99</h1>

      <a
        href="https://wa.me/919874714009"
        target="_blank"
        rel="noreferrer"
      >

        <button>
          WHATSAPP ME
        </button>

      </a>

    </div>



    {/* BUSINESS */}

    <div className="package-card middle-package">

      <h3>BUSINESS</h3>

      <p>
        Logo + Catalogue
        <br />
        + 4 Posts
      </p>

      <h1>₹199</h1>

      <a
        href="https://wa.me/919874714009"
        target="_blank"
        rel="noreferrer"
      >

        <button>
          WHATSAPP ME
        </button>

      </a>

    </div>



    {/* PREMIUM */}

    <div className="package-card">

      <h3>PREMIUM</h3>

      <p>
        Logo + Catalogue
        <br />
        + Website
      </p>

      <h1>₹299</h1>

      <a
        href="https://wa.me/919874714009"
        target="_blank"
        rel="noreferrer"
      >

        <button>
          WHATSAPP ME
        </button>

      </a>

    </div>

  </div>

</section>

      {/* ================= TESTIMONIALS ================= */}
<section className="testimonial-section" id="testimonials">
  <h2 className="testimonial-title">
    WHAT CLIENTS SAY
  </h2>

  <div className="testimonial-line"></div>


  <div className="testimonial-container">


    {/* TESTIMONIAL 1 */}

    <div className="testimonial-card">

      <div className="client-icon">
        👩
      </div>

      <p>
        "Loved working with Velora.
        The catalogue looked very
        premium and professional."
      </p>

      <h4>
        – Aditi, Cafe Owner
      </h4>

    </div>



    {/* TESTIMONIAL 2 */}

    <div className="testimonial-card">

      <div className="client-icon">
        👨
      </div>

      <p>
        "Very professional and creative
        designs. Highly recommended
        for small businesses."
      </p>

      <h4>
        – Priya, Boutique Owner
      </h4>

    </div>



    {/* TESTIMONIAL 3 */}

    <div className="testimonial-card">

      <div className="client-icon">
        👩
      </div>

      <p>
        "They understood my brand
        perfectly and created beautiful
        social media posts."
      </p>

      <h4>
        – Rhea, Jewellery Store
      </h4>

    </div>

  </div>

</section>

      {/* ================= CONTACT ================= */}

<section className="contact" id="contact">

  <h2>Get In Touch</h2>

  <p>
    Fill out the form below and we’ll contact you on WhatsApp.
  </p>


  <form
    className="contact-form"
    onSubmit={handleSubmit}
  >

    <input
      type="text"
      placeholder="Your Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />


    <input
      type="text"
      placeholder="Phone Number"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
    />


    <input
      type="text"
      placeholder="Business Name"
      name="business"
      value={formData.business}
      onChange={handleChange}
    />


    <textarea
      placeholder="Tell us about your business"
      name="message"
      value={formData.message}
      onChange={handleChange}
    ></textarea>


    <button type="submit">

      Submit

    </button>

  </form>

</section>




      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <h3>Velora</h3>

        <p>
          Helping small businesses build
          a strong online presence.
        </p>

        <p className="copyright">
          © 2026 Velora. All rights reserved.
        </p>

      </footer>

    </div>

  );
}

export default App;