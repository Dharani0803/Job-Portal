// Toast notification helper
function showMessage(msg) {
  let toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<i class="fas fa-info-circle"></i> ${msg}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// Service buttons interactions
document.querySelectorAll('.guide-action, .training-action, .booster-action').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = btn.closest('.service-card');
    let serviceName = '';
    if (card && card.dataset.service === 'career-guidance') serviceName = 'Career Guidance';
    else if (card && card.dataset.service === 'training') serviceName = 'Training & Support';
    else serviceName = 'Profile Booster';
    showMessage(`✨ ${serviceName}: Our experts will reach out with a free consultation.`);
  });
});

// Quiz logic
let selectedAnswers = {0: null, 1: null, 2: null};
const quizOptions = document.querySelectorAll('.quiz-opt');

quizOptions.forEach(opt => {
  opt.addEventListener('click', (e) => {
    const parentDiv = opt.closest('.quiz-options');
    const qIndex = parseInt(parentDiv.dataset.q);
    // Remove selected from same group
    parentDiv.querySelectorAll('.quiz-opt').forEach(el => el.classList.remove('selected'));
    opt.classList.add('selected');
    selectedAnswers[qIndex] = opt.dataset.val;
  });
});

document.getElementById('submitQuiz').addEventListener('click', () => {
  if (selectedAnswers[0] === null || selectedAnswers[1] === null || selectedAnswers[2] === null) {
    showMessage("Please answer all 3 questions to see personalized recommendations.");
    return;
  }
  
  let recommendation = "";
  const stage = selectedAnswers[0];
  const focus = selectedAnswers[1];
  const timeline = selectedAnswers[2];
  
  if (stage === "student" && focus === "clarity") {
    recommendation = "🎯 Start with Career Guidance: 1:1 mentor session + roadmap planning.";
  } else if (stage === "student" && focus === "skills") {
    recommendation = "📚 Join our Training & Support bootcamp (aptitude + coding) — ideal for freshers.";
  } else if (stage === "early" && focus === "branding") {
    recommendation = "💼 Profile booster is perfect: optimize your resume & LinkedIn for better visibility.";
  } else if (focus === "skills") {
    recommendation = "⚡ Training & Support programs: enroll in full-stack / data analytics track with placement assurance.";
  } else if (focus === "branding") {
    recommendation = "🌟 Profile booster: ATS resume review and mock interview sessions waiting for you.";
  } else if (timeline === "urgent") {
    recommendation = "🔥 Fast-track combo: Career guidance + profile booster — get placed within 90 days!";
  } else {
    recommendation = "🚀 We recommend starting with Career guidance to define your roadmap, then upgrade with training + profile booster.";
  }
  
  const resultDiv = document.getElementById('quizResult');
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `<i class="fas fa-lightbulb"></i> <strong>Your recommendation:</strong> ${recommendation}<br><small>Talk to our placement coordinator for priority assistance.</small>`;
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Contact section interactions
document.getElementById('contactUsBtn')?.addEventListener('click', () => {
  window.location.href = 'contact.html';
});

// Initialize Swiper carousel for testimonials
const swiper = new Swiper('.testimonialSwiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

// Animation on page load for service cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'all 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
  
  console.log('Services page loaded successfully');
});