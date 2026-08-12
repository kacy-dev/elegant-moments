/**
 * PLANNERS.JS
 * Handles category filtering and dynamic registration of new event planners.
 */

// Filter Planners by Specialty
function filterPlanners(category, button) {
  // Update active state on buttons
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  // Filter cards
  const cards = document.querySelectorAll('.planner-card');
  cards.forEach(card => {
    const specialty = card.getAttribute('data-specialty');
    if (category === 'all' || specialty === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Handle New Planner Onboarding Form Submission
function handlePlannerSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('plan-name').value;
  const title = document.getElementById('plan-title').value;
  const specialty = document.getElementById('plan-specialty').value;
  const exp = document.getElementById('plan-exp').value;
  const bio = document.getElementById('plan-bio').value;

  const container = document.getElementById('plannersContainer');
  const newCard = document.createElement('div');
  
  newCard.className = 'planner-card reveal visible';
  newCard.setAttribute('data-specialty', specialty);

  // Generate initial badge
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  newCard.innerHTML = `
    <div class="planner-header">
      <span class="planner-specialty-badge">${specialty}</span>
      <div class="planner-avatar-wrap">
        <span>${initials}</span>
      </div>
      <h3 class="planner-name">${name}</h3>
      <span class="planner-title">${title}</span>
    </div>
    <div class="planner-body">
      <p class="planner-bio">"${bio}"</p>
      <div class="planner-meta">
        <span><i class="fas fa-briefcase" style="color:var(--primary-gold);"></i> ${exp} Years Exp.</span>
        <span><i class="fas fa-check-circle" style="color:var(--primary-gold);"></i> Available</span>
      </div>
      <a href="contact.html" class="btn btn-outline" style="width: 100%; margin-top: 20px; text-align: center;">Book Planner</a>
    </div>
  `;

  // Prepend new planner card to top of grid
  container.prepend(newCard);

  // Reset form & notify user
  document.getElementById('plannerForm').reset();
  showToast('Welcome to the network! Your planner profile is now live.');
}