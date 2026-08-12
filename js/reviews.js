/**
 * REVIEWS.JS
 * Responsible for handling interactive star ratings, dynamic review creation, 
 * and user-submitted feedback handling on the Reviews page.
 */

let selectedRating = 0;

// Handle interactive star click on the review form
function setRating(stars) {
  selectedRating = stars;
  const starIcons = document.querySelectorAll('.interactive-stars i');
  
  starIcons.forEach((icon, index) => {
    if (index < stars) {
      icon.classList.add('active');
    } else {
      icon.classList.remove('active');
    }
  });
}

// Handle review form submission
function handleReviewSubmit(e) {
  e.preventDefault();

  const author = document.getElementById('rev-name').value;
  const eventType = document.getElementById('rev-type').value;
  const comment = document.getElementById('rev-comment').value;

  if (selectedRating === 0) {
    showToast('Please select a star rating before submitting!');
    return;
  }

  // Create new review card DOM element
  const reviewsContainer = document.getElementById('reviewsContainer');
  const newCard = document.createElement('div');
  newCard.className = 'review-card-full reveal visible';

  // Generate gold star icons string
  let starsHtml = '';
  for (let i = 0; i < 5; i++) {
    if (i < selectedRating) {
      starsHtml += '<i class="fas fa-star"></i> ';
    } else {
      starsHtml += '<i class="far fa-star"></i> ';
    }
  }

  newCard.innerHTML = `
    <div>
      <span class="review-badge">${eventType}</span>
      <div class="star-rating-icons">${starsHtml}</div>
      <p style="color: var(--text-gray); font-style: italic; margin-bottom: 20px;">"${comment}"</p>
    </div>
    <div class="client-info">
      <div class="client-avatar">${author.charAt(0).toUpperCase()}</div>
      <div class="client-details">
        <h4>${author}</h4>
        <span>Verified Client</span>
      </div>
    </div>
  `;

  // Prepend new review to top of grid
  reviewsContainer.prepend(newCard);

  // Reset form and show notification
  document.getElementById('reviewForm').reset();
  setRating(0);
  showToast('Thank you! Your review has been published.');
}