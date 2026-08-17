function App() {
  return (
    <div className="text-white bg-black selection:text-[#ff5e00] items-center font-serif box-border min-h-screen">
      {/* ==================== HERO SECTION ==================== */}
      <main className="relative min-h-screen overflow-hidden bg-black">
        {/* ==================== REPEATED BACKGROUND IMAGE ==================== */}
        <div
          className="
      absolute
      inset-0
      bg-[url('/background.png')]
      bg-repeat-x
      bg-top

      bg-[length:100%_100%]

      sm:bg-[length:70%_100%]

      md:bg-[length:50%_100%]

      lg:bg-[length:35%_100%]

      xl:bg-[length:35%_100%]

      2xl:bg-[length:30%_100%]
    "
        />

        {/* ==================== DARK OVERLAY ==================== */}
        <div
          className="
      absolute
      inset-0
      bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.88),rgba(0,0,0,0.25))]
      pointer-events-none
    "
        />

        {/* ==================== CONTENT ==================== */}
        <div className="relative z-10">
          {/* ==================== HEADER ==================== */}
          <header
            className="
        flex
        justify-between
        items-center
        px-5
        sm:px-8
        py-4
        bg-black/20
        backdrop-blur-sm
        md:justify-around
      "
          >
            <div>
              {/* Desktop Logo */}
              <img
                className="h-6 hidden sm:block"
                src="/logo2.png"
                alt="Crunchyroll Logo"
              />

              {/* Mobile Logo */}
              <img
                className="h-10 block sm:hidden"
                src="/mobile_logo.png"
                alt="Crunchyroll Mobile Logo"
              />
            </div>

            {/* ==================== HEADER BUTTONS ==================== */}
            <div className="flex items-center gap-2 sm:gap-4 select-none">
              <a href="#">
                <button
                  className="
              text-white
              font-bold
              border-2
              px-5
              sm:px-8
              py-2
              rounded-full
              text-sm
              sm:text-base
              hover:bg-white
              hover:text-black
              transition-all
            "
                >
                  LOGIN
                </button>
              </a>

              <a href="#">
                <button
                  className="
              hidden
              sm:block
              text-black
              font-bold
              border-2
              px-8
              py-2
              rounded-full
              bg-[#ff5e00]
              hover:bg-[#ff751f]
              transition-all
            "
                >
                  START FREE TRIAL
                </button>
              </a>
            </div>
          </header>

          {/* ==================== HERO CONTENT ==================== */}
          <div
            className="
        pt-16
        sm:pt-20
        md:pt-24
        pl-6
        sm:pl-10
        md:pl-24
        pr-5
        text-white
      "
          >
            <div className="selection:text-[#ff5e00]">
              <h1
                className="
            font-extrabold
            text-4xl
            sm:text-5xl
            md:text-7xl
            leading-tight
          "
              >
                The world’s largest
                <br />
                dedicated Anime
                <br />
                collection on
                <br />
                demand
              </h1>

              <div
                className="
            text-base
            sm:text-[20px]
            pt-8
            sm:pt-10
          "
              >
                Join Crunchyroll and discover the world of Anime
              </div>
            </div>

            {/* ==================== CTA BUTTON ==================== */}
            <div>
              <a href="#">
                <button
                  className="
              text-black
              font-bold
              border-2
              mt-8
              sm:mt-10
              px-6
              sm:px-8
              py-3
              sm:py-4
              rounded-full
              bg-[#ff5e00]
              hover:bg-[#ff751f]
              transition-all
              select-none
              text-sm
              sm:text-base
            "
                >
                  START FREE TRIAL
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* ==================== PREMIUM HEADING ==================== */}
      <section className="pt-10 text-center shadow-[0_-30px_40px_rgba(0,0,0,1)]">
        <div className="text-5xl font-extrabold m-15">
          <p className="sm:text-5xl text-3xl">Pick Your Premium</p>
        </div>
      </section>

      {/* ==================== PREMIUM PLANS ==================== */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-4">
        {/* FAN PLAN */}
        <div className="flex flex-col items-center p-5 min-h-[400px] border-2 border-[#ff5e00]  rounded-3xl m-5">
          <p className="text-[#ece1c2]">💥 Limited Time Offer 💥</p>

          <p className="font-extrabold text-4xl">FAN</p>

          <p className="p-2 text-2xl text-[#ece1c2] line-through">₹375.00</p>

          <p className="p-2 text-3xl text-center">₹350.00/yr for 1 Year</p>

          <a href="#">
            <button className="text-black font-bold px-10 sm:px-20 mt-3 py-2 rounded-full bg-[#ff5e00] hover:bg-[#ff751f] transition-all select-none">
              Get This Deal
            </button>
          </a>

          <ul className="pt-3 space-y-2">
            <li>
              <span className="text-[#ff5e00] text-sm mr-2">✓</span>
              <span className="text-sm">No ads</span>
            </li>

            <li>
              <span className="text-[#ff5e00] text-sm mr-2">✓</span>
              <span className="text-sm">
                Complete access to Crunchyroll's library
              </span>
            </li>

            <li>
              <span className="text-[#ff5e00] text-sm mr-2">✓</span>
              <span className="text-sm">
                New episodes shortly after airing in Japan
              </span>
            </li>
          </ul>
        </div>

        {/* MEGA FAN PLAN */}
        <div className="flex flex-col items-center p-5 min-h-[400px] border-2 border-[#ff5e00]  rounded-3xl m-5">
          <p className="text-[#ece1c2]">💥 Limited Time Offer 💥</p>

          <p className="font-extrabold text-4xl">Mega Fan</p>

          <p className="p-2 text-2xl text-[#ece1c2] line-through">₹475.00</p>

          <p className="p-2 text-3xl text-center">₹450.00/yr for 1 Year</p>

          <a href="#">
            <button className="text-black font-bold px-10 sm:px-20 mt-3 py-2 rounded-full bg-[#ff5e00] hover:bg-[#ff751f] transition-all select-none">
              Get This Deal
            </button>
          </a>

          <ul className="pt-3 space-y-2">
            <li>
              <span className="text-[#ff5e00] text-sm mr-2">✓</span>
              <span className="text-sm">
                No ads, plus access to all content
              </span>
            </li>

            <li>
              <span className="text-[#ff5e00] text-sm mr-2">✓</span>
              <span className="text-sm">
                Stream on a total of{" "}
                <span className="text-[#ff5e00]">4 devices</span> at a time
              </span>
            </li>

            <li>
              <span className="text-[#ff5e00] text-sm mr-2">✓</span>
              <span className="text-sm">Download HD videos</span>
            </li>

            <li>
              <span className="text-[#ff5e00] text-sm mr-2">✓</span>
              <span className="text-sm">Access to Crunchyroll Game Vault</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ==================== PLAN DISCLAIMER ==================== */}
      <section className="bg-black text-white p-10 pb-10">
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-300 leading-relaxed">
          Plan automatically renews at the regular price selected in the plan
          comparison. If you are eligible for the limited-time special offer,
          your subscription will begin at a promotional price displayed for the
          selected plan and continue at the regular price until you cancel. You
          may cancel at any time. Restrictions and other terms apply, including
          changes to prices, discounts, content and features.
        </div>
      </section>

      {/* ==================== FIRST TO WATCH ==================== */}
      <section className="text-center">
        <div className="text-5xl font-extrabold m-10">
          <p className="sm:text-5xl text-3xl">Be the First to Watch</p>
        </div>

        <div className="max-w-2xl mx-auto text-center text-[18px] text-gray-300 leading-relaxed px-5">
          Stream full seasons of the top anime, simulcasts, Crunchyroll
          Originals, and more!
        </div>
      </section>

      {/* ==================== ANIME GRID ==================== */}
      <section
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-6
          px-10
          sm:px-20
          md:px-20
          lg:px-20
          gap-8
          justify-items-center
        "
      >
        <AnimeCard
          image="/picture4.png"
          title="One Piece"
          link="https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece"
        />

        <AnimeCard
          image="/picture7.png"
          title="Lord of Mysteries"
          link="https://www.crunchyroll.com/series/GEXH3W2EZ/lord-of-mysteries"
        />

        <AnimeCard
          image="/picture12.png"
          title="My Hero Academia"
          link="https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia"
        />

        <AnimeCard
          image="/picture3.png"
          title="The Water Magician"
          link="https://www.crunchyroll.com/series/GG5H5XQG5/the-water-magician"
        />

        <AnimeCard
          image="/picture11.png"
          title="Dr. Stone"
          link="https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone"
        />

        <AnimeCard
          image="/picture13.png"
          title="My Dress-Up Darling"
          link="https://www.crunchyroll.com/series/GQWH0M9N8/my-dress-up-darling"
        />

        <AnimeCard
          image="/picture1.png"
          title="Secrets of the Silent Witch"
          link="https://www.crunchyroll.com/series/G9VHN9Q3G"
        />

        <AnimeCard
          image="/picture23.png"
          title="Re:Zero"
          link="https://www.crunchyroll.com/series/GRGG9798R/rezero--starting-life-in-another-world-"
        />

        <AnimeCard
          image="/picture6.png"
          title="Rent-A-Girlfriend"
          link="https://www.crunchyroll.com/series/G6QWV3976"
        />

        <AnimeCard
          image="/picture21.png"
          title="Uglymug, Epicfighter"
          subtitle="Subtitled"
          link="https://www.crunchyroll.com/series/GNVHKN9VK"
        />

        <AnimeCard
          image="/picture14.png"
          title="Clevatess"
          link="https://www.crunchyroll.com/series/G8DHV78ZM"
        />

        <AnimeCard
          image="/picture19.png"
          title="Toilet-bound Hanako-kun"
          link="https://www.crunchyroll.com/series/G24H1N3ZP"
        />

        <AnimeCard
          image="/demon2.jpg"
          title="Demon Slayer"
          link="https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba"
        />

        <AnimeCard
          image="/picture2.png"
          title="DAN DA DAN"
          link="https://www.crunchyroll.com/series/GG5H5XQ0D/dan-da-dan"
        />

        <AnimeCard
          image="/picture8.png"
          title="To Your Eternity"
          link="https://www.crunchyroll.com/series/GG5H5XMWV/to-your-eternity"
        />

        <AnimeCard
          image="/picture9.png"
          title="New Saga"
          link="https://www.crunchyroll.com/series/GVDHX859Q"
        />

        <AnimeCard
          image="/picture10.png"
          title="Dragon Raja - The Blazing Dawn-"
          link="https://www.crunchyroll.com/series/GDKHZEJN0"
        />

        <AnimeCard
          image="/picture24.png"
          title="A Couple of Cuckoos"
          link="https://www.crunchyroll.com/series/GXJHM39MP/a-couple-of-cuckoos"
        />
      </section>

      {/* ==================== MEMBER SECTION ==================== */}
      <section className="pt-10 text-center shadow-[0_-30px_40px_rgba(0,0,0,1)]">
        <div className="text-5xl font-extrabold m-5">
          <p className="sm:text-5xl text-3xl">Already a Member?</p>
        </div>
      </section>

      <section className="text-center">
        <a href="#">
          <button className="border-2 px-16 py-3 rounded-full hover:bg-white hover:text-black transition-all select-none">
            Login
          </button>
        </a>

        <p className="p-3">
          Or{" "}
          <a href="#">
            <span className="text-[#ff5e00] hover:text-white hover:underline transition-all">
              Create an Account
            </span>
          </a>{" "}
          for free!
        </p>
      </section>

      {/* ==================== PREMIUM BENEFITS ==================== */}
      <section className="text-center">
        <div className="text-5xl font-extrabold m-10">
          <p className="sm:text-5xl text-3xl">Get More with Premium</p>
        </div>

        <div className="max-w-2xl mx-auto text-center text-[18px] text-gray-300 leading-relaxed px-5">
          Enjoy Crunchyroll’s entire library ad-free, including episodes shortly
          after being released in Japan. Plus, get exclusive discounts at the
          Crunchyroll Store!
        </div>
      </section>

      {/* COMPARE PLANS */}
      <section className="text-center pt-10 text-sm">
        <a href="#">
          <button className="text-black font-bold border-2 px-8 py-2 rounded-full bg-[#ff5e00] hover:bg-[#ff751f] transition-all select-none">
            Compare All Plans ↑
          </button>
        </a>
      </section>

      {/* BENEFITS DISCLAIMER */}
      <section className="bg-black text-white p-10 pb-10">
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-300 leading-relaxed">
          Benefits may differ based on the selected subscription tier and the
          region in which you are located.
        </div>
      </section>

      {/* ==================== QUESTIONS ==================== */}
      <section className="text-center">
        <div className="text-5xl font-extrabold m-10">
          <p className="sm:text-5xl text-3xl">Questions?</p>
        </div>

        <div className="max-w-2xl mx-auto text-center text-[18px] text-gray-300 leading-relaxed">
          Visit our{" "}
          <a
            href="#"
            className="text-[#ff5e00] hover:underline hover:text-white transition-all"
          >
            Help Center
          </a>{" "}
          to learn more.
        </div>
      </section>

      {/* DEVICE DISCLAIMER */}
      <section className="text-center p-20">
        <div className="text-center text-[18px] text-gray-300 leading-relaxed">
          *Device and content availability vary by country or region.
        </div>
      </section>

      {/* ==================== FOOTER NAVIGATION ==================== */}
      <section
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          px-10
          sm:px-20
          md:px-20
          lg:px-20
          gap-10
          pb-10
        "
      >
        {/* KEY PAGES */}
        <FooterColumn
          title="Key Pages"
          links={[
            "Browse New",
            "Browse Popular",
            "Browse All (A-Z)",
            "Browse Simulcasts",
            "Release Calendar",
            "Music Videos & Concerts",
            "Games",
            "News",
            "Anime Awards",
            "Events & Experiences",
          ]}
        />

        {/* GENRE */}
        <FooterColumn
          title="Genre"
          links={[
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Music",
            "Romance",
            "Sci-Fi",
            "Seinen",
            "Shojo",
            "Shonen",
            "Slice of life",
            "Sports",
            "Supernatural",
            "Thriller",
          ]}
        />

        {/* TOP SERIES */}
        <FooterColumn
          title="Top 15 Popular Series"
          links={[
            "Apothecary Diaries",
            "Attack on Titan",
            "Blue Lock",
            "Demon Slayer",
            "Dragon Ball DAIMA",
            "Dragon Ball Super",
            "Fire Force",
            "Jujutsu Kaisen",
            "Kaiju No 8",
            "My Hero Academia",
            "Naruto",
            "Naruto Shippuden",
            "One Piece",
            "Solo Leveling",
            "Spy x Family",
          ]}
        />

        {/* LANGUAGES */}
        <FooterColumn
          title="Languages"
          links={[
            "English / English (US)",
            "Indonesian / Bahasa Indonesia",
            "German / Deutsch",
            "Spanish / Español (América Latina)",
            "Spanish / Español (España)",
            "French / Français",
            "Italian / Italiano",
            "Portuguese / Português (Brasil)",
            "Portuguese / Português (Portugal)",
            "Russian / Русский",
            "Arabic / العربية",
            "Hindi / हिंदी",
          ]}
        />

        {/* CRUNCHYROLL */}
        <FooterColumn
          title="Crunchyroll"
          links={[
            "About",
            "Help Center",
            "Terms of Use",
            "Privacy Policy",
            "AdChoices",
            "Do Not Sell or Share My Personal Information",
            "Cookie Consent Tool",
            "Press Inquiries",
            "Advertising Inquiries",
            "Get the Apps",
            "Redeem Gift Card",
            "Jobs",
            "Start Free Trial / Join Premium / Try Premium",
          ]}
        />

        {/* ACCOUNT */}
        <div>
          <ul className="space-y-4 md:space-y-2">
            <p className="font-bold mb-4">Account</p>

            <li>
              <a href="#" className="text-sm text-[#a0a0a0] hover:underline">
                Create Account
              </a>
            </li>

            <li>
              <a href="#" className="text-sm text-[#a0a0a0] hover:underline">
                Log In
              </a>
            </li>

            <p className="font-bold mt-10 mb-4">Connect With Us</p>

            <SocialLink icon="▶" name="YouTube" />
            <SocialLink icon="f" name="Facebook" />
            <SocialLink icon="𝕏" name="X" />
            <SocialLink icon="◎" name="Instagram" />
            <SocialLink icon="♪" name="TikTok" />
          </ul>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="px-10 sm:px-20">
        <div
          className="
            min-h-[120px]
            border-t-2
            border-[#4e4b4b]
            flex
            flex-col
            items-center
            justify-center
            md:flex-row
            md:justify-between
          "
        >
          <p className="text-[#898686] text-2xl m-4 md:m-0">SONY PICTURES</p>

          <div>
            <select
              className="bg-black border border-[#4e4b4b] px-4 py-2 rounded-md focus:outline-none select-none"
              defaultValue="English (US)"
            >
              <option>English (US)</option>
              <option>Español</option>
              <option>Español (España)</option>
              <option>Português (Brasil)</option>
              <option>Português (Portugal)</option>
              <option>Français</option>
              <option>Deutsch</option>
              <option>العربية</option>
              <option>हिंदी</option>
              <option>Русский</option>
              <option>Bahasa Indonesia</option>
              <option>Italian</option>
            </select>
          </div>
        </div>

        <div className="h-20 border-t-2 border-[#4e4b4b] flex justify-center items-center">
          <p className="text-[#898686]">© Crunchyroll, LLC</p>
        </div>
      </footer>
    </div>
  );
}

/* =========================================================
   ANIME CARD COMPONENT
========================================================= */

function AnimeCard({ image, title, subtitle = "Sub | Dub", link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-center items-center hover:bg-gray-900 mt-10 p-3 rounded-lg transition-all w-full"
    >
      <div className="text-center">
        <div className="h-60 mb-2 flex justify-center">
          <div className="h-50 w-40">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition duration-150 hover:opacity-90 rounded-sm"
            />
          </div>
        </div>

        <p className="mb-2">{title}</p>

        <p className="text-sm text-[#a0a0a0]">{subtitle}</p>
      </div>
    </a>
  );
}

/* =========================================================
   FOOTER COLUMN COMPONENT
========================================================= */

function FooterColumn({ title, links }) {
  return (
    <nav>
      <ul className="space-y-4 md:space-y-2">
        <p className="font-bold mb-4">{title}</p>

        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-sm text-[#a0a0a0] hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* =========================================================
   SOCIAL LINK COMPONENT
========================================================= */

function SocialLink({ icon, name }) {
  return (
    <li>
      <a href="#" className="text-sm text-[#a0a0a0] hover:underline">
        <span className="mr-2 hover:text-[#ff5e00] transition-all">{icon}</span>
        {name}
      </a>
    </li>
  );
}

export default App;
