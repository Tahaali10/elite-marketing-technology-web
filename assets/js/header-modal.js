document.addEventListener('DOMContentLoaded', function() {
  const affiliateLinks = document.querySelectorAll('.become-affiliate-link');
  const affiliateModal = document.getElementById('affiliate-modal');
  const closeModal = document.getElementById('affiliate-modal-close');
  const affiliateForm = document.getElementById('affiliate-form');
  const successMessage = document.getElementById('affiliate-success');

  // Open modal (for all affiliate links, including mobile/offcanvas clones)
  affiliateLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      affiliateModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  closeModal.addEventListener('click', function() {
    affiliateModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close when clicking outside modal
  affiliateModal.addEventListener('click', function(e) {
    if (e.target === affiliateModal) {
      affiliateModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Form submission
  affiliateForm.addEventListener('submit', function(e) {
    e.preventDefault();
    affiliateForm.style.display = 'none';
    successMessage.style.display = 'block';

    setTimeout(function() {
      affiliateForm.reset();
      affiliateForm.style.display = 'block';
      successMessage.style.display = 'none';
      affiliateModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 3000);
  });
});


document.body.addEventListener('click', function(e) {
  if (e.target.closest('.become-affiliate-link')) {
    e.preventDefault();
    affiliateModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
});
