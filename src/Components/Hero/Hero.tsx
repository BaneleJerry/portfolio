/*
  HERO COMPONENT — TEACHING NOTES
  ================================

  A React component is just a JavaScript function that returns JSX (HTML-like syntax).
  The function name must start with a capital letter — that's how React tells the
  difference between your components and regular HTML tags.

  Structure of this file:
    1. Imports
    2. Data (static content lives outside the component so it doesn't re-create on every render)
    3. The component function
    4. JSX return — what the user actually sees
*/

// ─── 1. IMPORTS ──────────────────────────────────────────────────────────────
// useState  → lets us store and update values inside the component
// useEffect → lets us run code AFTER the component renders (side effects)
import { useState, useEffect } from "react";
import "./Hero.css";

// ─── 2. STATIC DATA ──────────────────────────────────────────────────────────
// We define this OUTSIDE the component.
// If it were inside, React would re-create this array on every single render.
// Since it never changes, it belongs outside.


// ─── 3. THE COMPONENT ────────────────────────────────────────────────────────
const Hero = () => {

    /*
      useState(false) creates a piece of state — a value React "watches".
      When the value changes, React re-renders the component automatically.
  
      Syntax:  const [value, setValue] = useState(initialValue)
        - `visible`    → the current value (starts as false)
        - `setVisible` → the function you call to change it
  
      We use this to trigger the fade-in animation AFTER the component mounts.
    */
    const [visible, setVisible] = useState(false);

    /*
      useEffect runs AFTER the component first appears on screen.
      The empty array [] at the end means "only run this once, on mount".
      Without [], it would run after every single render — we don't want that.
  
      Here we use a tiny delay (100ms) before setting visible to true.
      This gives the browser time to paint the initial state (opacity: 0),
      then triggers the CSS transition. Without the delay, the browser might
      skip the transition entirely because mount + state change happen too fast.
    */
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        // The return value of useEffect is a "cleanup" function.
        // React calls it when the component is removed from the page.
        // We clear the timer to avoid memory leaks.
        return () => clearTimeout(timer);
    }, []);

    // ─── 4. JSX RETURN ─────────────────────────────────────────────────────────
    /*
      JSX looks like HTML but it's actually JavaScript.
      Key differences from HTML:
        - `className` instead of `class`  (class is a reserved JS keyword)
        - `style={{ }}` uses a JS object, not a string
        - Self-closing tags need a slash: <img /> not <img>
        - JS expressions go inside { curly braces }
  
      We pass `visible` as a class toggle below.
      When visible=false → className="hero"
      When visible=true  → className="hero hero--visible"
      The CSS transition then animates from opacity:0 to opacity:1.
    */
    return (
        <section className={`hero ${visible ? "hero--visible" : ""}`} id="hero">

            {/* ── LEFT COLUMN ── */}
            <div className="hero__content">

                {/*
          OPEN TO WORK BADGE
          The pulsing dot is pure CSS animation — no JS needed.
          We keep presentational effects in CSS, logic in JS.
        */}
                <div className="hero__badge">
                    <span className="hero__badge-dot" />
                    Open to work
                </div>

                {/*
          EYEBROW — small label above the headline.
          The ::before line decoration is handled entirely in CSS.
        */}
                <p className="hero__eyebrow">Graduate Java Developer</p>

                {/*
          HEADLINE
          We use <em> for the accent word so semantics are correct
          (it means emphasis), then we style it green in CSS.
          The blinking cursor span is purely decorative — aria-hidden
          hides it from screen readers so they don't read "cursor".
        */}
                <h1 className="hero__heading">
                    Building <em>reliable</em><br />
                    backend systems
                    <span className="hero__cursor" aria-hidden="true" />
                </h1>

                {/*
          BIO
          Plain paragraph — font-weight 300 (light) gives it a
          refined feel against the heavier headline.
        */}
                <p className="hero__sub">
                    Hi, I'm Banele Thabede — a backend engineer based in Germiston,
                    Gauteng. I specialise in Java, Spring Boot, and production-grade
                    REST APIs.
                </p>

                {/*
          CTA BUTTONS
          We use <a> tags (not <button>) because they navigate somewhere.
          Rule of thumb: buttons DO things, links GO places.

          target="_blank"         → opens in new tab
          rel="noopener noreferrer" → security best practice with _blank
        */}
                <div className="hero__actions">
                    <a href="#projects" className="btn hero__btn--primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn">
                        Contact Me
                    </a>
                    <a
                        href="https://github.com/BaneleJerry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                    >
                        GitHub ↗
                    </a>
                </div>

                {/*
          TECH STACK ROW
          .map() loops over the TECH_STACK array and returns a JSX element
          for each item. This is the React way of rendering lists.

          The `key` prop is REQUIRED on list items. React uses it internally
          to track which item is which when the list changes. Using the item
          value as the key is fine here because the list never changes.
          In dynamic lists (from an API), use a unique ID instead.
        */}
            </div>

            {/* ── RIGHT COLUMN — AVATAR ── */}
            {/*
        The avatar frame is purely decorative CSS — corner brackets,
        top accent line, and the bracket corners are all done with
        pseudo-elements (::before / ::after) and absolute positioning.

        Replace the .hero__avatar-placeholder div with an <img> tag
        once you have your photo:

        <img
          src="/assets/your-photo.webp"
          alt="Banele Thabede"
          className="hero__avatar-img"
        />
      */}
            <div className="hero__avatar-wrap">
                <div className="hero__avatar-frame">
                    <div className="hero__avatar-placeholder">
                        <span className="hero__avatar-initials">BT</span>
                        <span className="hero__avatar-hint">// your photo here</span>
                    </div>
                </div>
            </div>

        </section>
    );
};

// Every component file must export the component so other files can import it.
// `default` means this is the main thing this file exports.
export default Hero;