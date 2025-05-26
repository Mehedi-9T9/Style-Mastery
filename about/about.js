 // FAQ Accordion
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isActive = question.classList.contains('active');
                
                // First close all answers in this category
                const category = question.closest('.faq-category');
                const categoryQuestions = category.querySelectorAll('.faq-question');
                
                categoryQuestions.forEach(q => {
                    if (q !== question) {
                        q.classList.remove('active');
                        q.nextElementSibling.classList.remove('show');
                    }
                });
                
                // Toggle current question
                if (isActive) {
                    question.classList.remove('active');
                    answer.classList.remove('show');
                } else {
                    question.classList.add('active');
                    answer.classList.add('show');
                }
            });
        });
        
        // Open first question in each category by default
        document.querySelectorAll('.faq-category').forEach(category => {
            const firstQuestion = category.querySelector('.faq-question');
            firstQuestion.classList.add('active');
            firstQuestion.nextElementSibling.classList.add('show');
        });