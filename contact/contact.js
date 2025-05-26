 // FAQ Accordion
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isActive = question.classList.contains('active');
                
                // Close all other answers
                faqQuestions.forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('show');
                });
                
                // Open current answer if it wasn't active
                if (!isActive) {
                    question.classList.add('active');
                    answer.classList.add('show');
                }
            });
        });
        
        // Contact Form Submission
        const contactForm = document.getElementById('stayviaContactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For this example, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} as soon as possible.`);
            
            // Reset the form
            contactForm.reset();
        });