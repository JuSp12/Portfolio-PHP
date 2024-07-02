// Loading
document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading time
  setTimeout(function () {
    document.getElementById("loading").style.display = "none";
  }, 3000);
});

// Nav bar scroll
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("nav");
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  var nav = document.querySelector(".navbar");
  var dropDownMenu = document.querySelector(".dropdown_menu");

  // If the menu is expanded, do not proceed with further actions.
  if (dropDownMenu.classList.contains("open")) {
    return;
  }

  // If scrolling is greater than 100px or the menu is expanded, add the class 'opaque'; otherwise, remove it.
  if (currentScroll > 100) {
    navbar.classList.add("opaque");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.add("transparent");
    navbar.classList.remove("opaque");
  }
});

//Scroll smooth to ...
//Home
const homeLink = document.getElementById("homeLink");

if (homeLink) {
  homeLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    window.location.href = window.location.href.split("#")[0]; // Reloading the current page, removing the URL fragment.
  });
}

//About
const aboutLink1 = document.querySelector('a[href="#about"]');
const aboutLink2 = document.querySelector('a[href="#about1"]');

function scrollToPosition(elementId, offset) {
  const navHeight = document.querySelector("nav").offsetHeight;
  const element = document.getElementById(elementId);

  if (element) {
    // Checking if an element with the specified ID has been found.
    const scrollToPosition = element.offsetTop - navHeight + offset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  }
}

if (aboutLink1) {
  aboutLink1.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToPosition("about", 850);
  });
}

if (aboutLink2) {
  aboutLink2.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToPosition("about", 800);
  });
}

//Skills

const skillsLink1 = document.querySelector('a[href="#skills"]');
const skillsLink2 = document.querySelector('a[href="#skills1"]');

function scrollToPosition(elementId, offset) {
  const navHeight = document.querySelector("nav").offsetHeight;
  const element = document.getElementById(elementId);

  if (element) {
    // Checking if an element with the specified ID has been found.
    const scrollToPosition = element.offsetTop - navHeight + offset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  }
}

if (skillsLink1) {
  skillsLink1.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToPosition("skills", 0);
  });
}

if (skillsLink2) {
  skillsLink2.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToPosition("skills", -50);
  });
}

//Resume
const resumeLink1 = document.querySelector('a[href="#resume"]');
const resumeLink2 = document.querySelector('a[href="#resume1"]');

function scrollToPosition(elementId, offset) {
  const navHeight = document.querySelector("nav").offsetHeight;
  const element = document.getElementById(elementId);

  if (element) {
    // Checking if an element with the specified ID has been found.
    const scrollToPosition = element.offsetTop - navHeight + offset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  }
}

if (resumeLink1) {
  resumeLink1.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToPosition("resume", 100);
  });
}

if (resumeLink2) {
  resumeLink2.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToPosition("resume", 0);
  });
}

//contact

const contactLink1 = document.querySelector('a[href="#contactContainer"]');
const contactLink2 = document.querySelector('a[href="#contactContainer1"]');

function scrollToPosition(elementId, offset) {
  const navHeight = document.querySelector("nav").offsetHeight;
  const element = document.getElementById(elementId);

  if (element) {
    // Checking if an element with the specified ID has been found.
    const scrollToPosition = element.offsetTop - navHeight + offset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  }
}

if (contactLink1) {
  contactLink1.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToPosition("contactContainer", 0);
  });
}

if (contactLink2) {
  contactLink2.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToPosition("contactContainer", 0);
  });
}

// NavBar

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");

  const isOpen = dropDownMenu.classList.contains("open");
  var navbar = document.getElementById("nav");
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (isOpen) {
    navbar.classList.add("transparent");
    navbar.classList.remove("opaque");
  } else if (!isOpen && currentScroll > 100) {
    navbar.classList.add("opaque");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.add("transparent");
    navbar.classList.remove("opaque");
  }

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

const menuItems = document.querySelectorAll(".dropdown_menu li a");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList = "fa-solid fa-bars";

    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    var navbar = document.getElementById("nav");

    if (currentScroll > 100) {
      navbar.classList.add("opaque");
      navbar.classList.remove("transparent");
    } else {
      navbar.classList.add("transparent");
      navbar.classList.remove("opaque");
    }
  });
});

//intro
document.addEventListener("DOMContentLoaded", (event) => {
  const animatedHeaders = document.querySelectorAll(".animatedHeader");

  animatedHeaders.forEach((header) => {
    const headerText = header.innerText;
    header.innerHTML = "";

    headerText.split("").forEach((char) => {
      const span = document.createElement("span");
      span.innerText = char;
      if (char === " ") {
        span.style.marginRight = "5px";
      }
      header.appendChild(span);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const jobTitleElement = document.getElementById("job-title");

  const jobTitles = ["Fullstack developer", "Quality Assurance Manager"];
  let index = 0;

  function typeAndDelete(index) {
    const currentTitle = jobTitles[index];
    let animatedTitle = "";

    for (let i = 0; i < currentTitle.length; i++) {
      if (currentTitle[i] === " ") {
        animatedTitle += `<span class="typing">&nbsp;</span>`; // Adding a space as &nbsp;
      } else {
        animatedTitle += `<span class="typing">${currentTitle.charAt(
          i
        )}</span>`;
      }
    }

    jobTitleElement.innerHTML = animatedTitle;

    setTimeout(function () {
      const spans = jobTitleElement.querySelectorAll("span");

      spans.forEach(function (span, index) {
        setTimeout(function () {
          span.classList.add("deleting");
        }, index * 50);
      });

      setTimeout(function () {
        typeAndDelete((index + 1) % jobTitles.length);
      }, currentTitle.length * 100 + 3000); // 1000ms is the time between removing the text and the appearance of the new one.
    }, 500); // The waiting time before starting to remove the text.
  }

  typeAndDelete(index);
});

// Download CV
function downloadResume() {
  window.open("/public/Justyna Spital 2024.pdf", "_blank");
}

// GSAP
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Horizontal scrolling with pinning for section1
  const aboutBoxes = document.querySelectorAll(".aboutBox");

  gsap.to(aboutBoxes, {
    xPercent: -100 * (aboutBoxes.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".aboutContainer",
      pin: true,
      scrub: 1,
      snap: 1 / (aboutBoxes.length - 1),
      end: () =>
        "+=" +
        (document.querySelector(".container2").scrollWidth - window.innerWidth),
      onEnter: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "black" });
      },
      onLeaveBack: () => {
        gsap.to("body", { duration: 1.0, backgroundColor: "white" });
      },
    },
  });

  // Configure ScrollTrigger for subsequent sections
  ScrollTrigger.create({
    trigger: ".section2",
    start: "top 20%",
    end: "bottom ",
    onEnter: () => {
      gsap.to("body", { duration: 1.0, backgroundColor: "white" });
    },
    onLeaveBack: () => {
      gsap.to("body", { duration: 1.0, backgroundColor: "black" });
    },
  });

  ScrollTrigger.create({
    trigger: ".section3",
    start: "top 20%",
    end: "bottom ",
    onEnter: () => {
      gsap.to("body", { duration: 1.0, backgroundColor: "black" });
      gsap.to(".graduate", { duration: 1.0, backgroundColor: "black" });
    },
    onLeaveBack: () => {
      gsap.to("body", { duration: 1.0, backgroundColor: "white" });
      gsap.to(".graduate", { duration: 1.0, backgroundColor: "white" });
    },
  });

  ScrollTrigger.create({
    trigger: ".section4",
    start: "top 20%",
    end: "bottom",
    onEnter: () => {
      gsap.to("body", { duration: 1.0, backgroundColor: "white" });
    },
    onLeaveBack: () => {
      gsap.to("body", { duration: 1.0, backgroundColor: "black" });
    },
  });

  gsap.utils.toArray("path").forEach((element) => {
    const length = element.getTotalLength();
    element.style.strokeDasharray = length;
    element.style.strokeDashoffset = length;

    // Acceleration for horizontal lines
    let scrubSpeed = 10; // Default value
    const boundingBox = element.getBBox();
    if (boundingBox.width > boundingBox.height) {
      scrubSpeed = 10; // Faster animation for horizontal lines
    }

    // Flow animation

    gsap.fromTo(
      element,
      { strokeDashoffset: length },
      {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          end: "bottom 20%",
          scrub: scrubSpeed,
          toggleActions: "restart none none reverse",
        },
      }
    );
  });

  gsap.utils.toArray("circle").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 60%",
        end: "bottom 70%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 0.5,
      duration: 1,
    });
  });

  // Text Animation

  gsap.utils.toArray(".animatedHeader").forEach((header) => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      scale: 0.5,
      duration: 1,
    });
  });

  gsap.utils.toArray(".subCategory").forEach((element) => {
    const headers = element.querySelectorAll("h3");
    const images = element.querySelectorAll("img");
    const listItems = element.querySelectorAll("li");

    // Animation of headers appearing
    gsap.from(headers, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animation of img appearing
    gsap.from(images, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: element,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onComplete: () => {
          gsap.set(images, { visibility: "visible" });
        },
      },
    });

    // Animation of text appearing
    gsap.from(listItems, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: element,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onComplete: () => {
          gsap.set(listItems, { visibility: "visible" });
        },
      },
    });
  });

  gsap.utils.toArray(".container4").forEach((element) => {
    const box = element.querySelectorAll(".box");

    gsap.from(box, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: element,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play reverse",
      },
    });
  });

  gsap.utils.toArray(".contactContainer").forEach((contact) => {
    gsap.from(contact, {
      scrollTrigger: {
        trigger: contact,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  });
});

// Game

// Food Safety

document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector(".food ul");
  const liElements = document.querySelectorAll(".food li");
  let radius = 200; // Initial radius

  // Function for positioning elements on a sphere
  function positionElements() {
    const total = liElements.length;
    liElements.forEach((li, index) => {
      const theta = Math.acos(-1 + (2 * index) / total);
      const phi = Math.sqrt(total * Math.PI) * theta;

      if (window.innerWidth >= 801) {
        radius = 250; // For screens with a width of 801px and larger"
      } else if (window.innerWidth >= 400 && window.innerWidth <= 800) {
        radius = 150; // For screens with a width between 400px and 800px
      } else {
        radius = 120; // For screens with a width less than 330px
      }

      const x = radius * Math.cos(phi) * Math.sin(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(theta);

      li.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    });
  }

  positionElements(); // Setting initial positions

  // Listening for window resize events
  window.addEventListener("resize", () => {
    positionElements(); // Updating element positions after window resize
  });
});

// Experience
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".timeline-item");
  const yearTitle = document.getElementById("year-title");
  const company = document.getElementById("company");
  const experience = document.getElementById("experience");
  const moreBtn = document.getElementById("more-btn");
  const dataBox = document.getElementById("data-box");

  const data = {
    2018: {
      title: "Graduate program – Operation Supervisor",
      company: "Tarczynski",
      experience:
        "•  Managed Production Team: Led a team of up to 30 people, ensuring efficient operations and high performance. <br><br>" +
        "•  Optimized Production Processes: Implemented strategies for process optimization and continuous improvement, boosting productivity. <br><br>" +
        "•  Oversaw Material Transfers: Ensured accurate transfer of materials between production stages for seamless workflow. <br><br>" +
        "•  Managed Employment Agency Relations. <br><br>" +
        "•  Analysed Workforce Demand: Conducted industry-specific analysis to meet optimal staffing levels. <br><br>" +
        "•  Trained in Lean Manufacturing and 5S: Provided training on lean manufacturing and 5S principles to promote operational excellence. <br><br>" +
        "•  Created KPI and NCR Reports: Generated detailed reports on Key Performance Indicators (KPIs) and Non-Conformance Reports (NCRs) to guide decision-making and improvements. <br><br>",
    },
    2020: {
      title: "Hygiene and Quality Team Leader",
      company: "THG",
      experience:
        "•  Managed Quality and Hygiene Team: Led a team ensuring high standards in quality and hygiene. <br><br>" +
        "•  Ensured Production Record Accuracy: Oversaw precise completion and retention of all production records. <br><br>" +
        "•  Reduced NCRs through Analysis: Implemented strategies to minimize Non-Conformance Reports. <br><br>" +
        "•  Analysed Customer Complaints: Identified root causes and improved customer satisfaction. <br><br>" +
        "•  Conducted Quality Checks: Verified product quality and maintained analysis database. <br><br>" +
        "•  Interpreted Microbiological Results: Ensured product safety and compliance. <br><br>" +
        "•  Conducted Various Audits: Carried out GMP, internal audits, and material inspections. <br><br>" +
        "•  Developed Quality System: Established comprehensive standards in a new factory. <br><br>",
    },
    2021: {
      title: "Food Safety and Quality Specialist",
      company: "THG",
      experience:
        "•  Managed Quality and Hygiene Team: Led a team ensuring high standards in quality and hygiene.<br><br>" +
        "•  Ensured Production Record Accuracy: Oversaw precise completion and retention of all production records.<br><br>" +
        "•  Reduced NCRs through Analysis: Implemented strategies to minimize Non-Conformance Reports.<br><br>" +
        "•  Analysed Customer Complaints: Identified root causes and improved customer satisfaction.<br><br>" +
        "•  Conducted Quality Checks: Verified product quality and maintained analysis database.<br><br>" +
        "•  Interpreted Microbiological Results: Ensured product safety and compliance.<br><br>" +
        "•  Conducted Various Audits: Carried out GMP, internal audits, and material inspections.<br><br>" +
        "•  Developed Quality System: Established comprehensive standards in a new factory.<br><br>",
    },
    2022: {
      title: "Supplier Quality Manager – CoManufacturing and Packaging",
      company: "THG",
      experience:
        "•  Data Analysis and Reporting: Identified trends and generated reports to support strategic decisions. <br><br>" +
        "•  Database Management: Maintained and updated databases, ensuring data integrity. <br><br>" +
        "•  Supplier Process Development: Developed and maintained supplier processes in line with food safety and quality standards. <br><br>" +
        "•  Customer Complaint Resolution: Addressed and resolved customer complaints. <br><br>" +
        "•  VACCP Team Member: Implemented preventive measures against supply chain vulnerabilities. <br><br>" +
        "•  External Audits: Conducted audits for various finished products (bars, gummies, popcorn, crisps, drinks, supplements, cookies, cereals etc.), ensuring quality compliance. <br><br>" +
        "•  Supplier Relationship Management: Managed external supplier relationships, ensuring product quality. <br><br>" +
        "•  Certification Audit Support: Assisted in BRC, Organic, and Halal certification audits, aiding in successful certification. <br><br>",
    },
  };

  moreBtn.addEventListener("click", function () {
    experience.classList.toggle("show");
    moreBtn.innerText = experience.classList.contains("show") ? "Less" : "More";
  });

  function updateData(year) {
    const details = data[year];
    yearTitle.textContent = details.title;
    company.textContent = details.company;
    experience.innerHTML = details.experience; // Set HTML content instead of text
    moreBtn.style.display = "block";
    experience.classList.remove("show");
    moreBtn.innerText = "More";
    dataBox.classList.add("active"); // Show data box
  }

  // Add 'active' class to timeline item for year 2022
  const item2022 = document.querySelector('.timeline-item[data-year="2022"]');
  item2022.classList.add("active");

  // Click event listener for each timeline item
  items.forEach((item) => {
    item.addEventListener("click", function () {
      items.forEach((i) => i.classList.remove("active")); // Remove 'active' class from all items
      this.classList.add("active"); // Add 'active' class to the clicked item

      const year = this.getAttribute("data-year");
      updateData(year); // Update data displayed in data-box

      dataBox.classList.remove("active"); // Hide data-box briefly for transition effect
      setTimeout(() => {
        dataBox.classList.add("active"); // Show data-box after brief delay
      }, 100);
    });
  });

  // Initial data update for year 2022
  updateData("2022");
});

//Contact form

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Zatrzymaj domyślne przesyłanie formularza

  const formData = new FormData(this);

  fetch('sendemail.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(data => {
      // Ukryj formularz
      
      document.getElementById('contactForm').style.display = 'none';
      // Pokaż komunikat potwierdzenia
      document.getElementById('confirmationPage').style.display = 'inline';
      document.getElementById('emailContainer').style.display = 'none';
  })
  .catch(error => {
      console.error('Error:', error);
  });
});




// Email

document.addEventListener("DOMContentLoaded", function () {
  const emailContainer = document.getElementById("emailContainer");
  const emailIcon = document.getElementById("emailIcon");
  const tooltipText = document.getElementById("tooltipText");

  emailContainer.addEventListener("mouseenter", function () {
    emailIcon.style.display = "none";
    tooltipText.style.display = "block";

    // Use SplitType to split the text into characters for animation
    let typeSplit = new SplitType(tooltipText, {
      types: "chars",
      tagName: "span",
    });

    // Animate the characters with GSAP
    gsap.fromTo(
      typeSplit.chars,
      { y: "110%", opacity: 0, rotationZ: "10" },
      {
        y: "0%",
        opacity: 1,
        rotationZ: "0",
        duration: 1.45,
        ease: "power1.inOut",
        stagger: 0.1,
      }
    );
  });

  emailContainer.addEventListener("mouseleave", function () {
    emailIcon.style.display = "block";
    tooltipText.style.display = "none";
  });

  emailContainer.addEventListener("click", function () {
    const email = tooltipText.innerText;
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  });
});

//Fotter
// Show the scroll to top button when user scrolls down
window.onscroll = function () {
  var scrollToTopButton = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.parentElement.style.display = "block";
  } else {
    scrollToTopButton.parentElement.style.display = "none";
  }
};

// Smooth scroll to top when button is clicked
document.getElementById("scrollToTopButton").onclick = function (e) {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

let lastOrientation = window.orientation;

window.addEventListener("resize", function () {
  if (window.orientation !== lastOrientation) {
    // Changing orientation, reload the page
    location.reload();
  }

  lastOrientation = window.orientation;
});
