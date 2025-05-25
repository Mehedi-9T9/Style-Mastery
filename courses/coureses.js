
        
        
        // Course Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const courseCards = document.querySelectorAll('.course-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                courseCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Course Modal
        const courseModal = document.getElementById('courseModal');
        const closeModal = document.querySelector('.close-modal');
        const viewCourseBtns = document.querySelectorAll('.view-course-btn');
        
        // Course data
        const courses = {
            1: {
                title: "Fashion Styling Fundamentals",
                content: `
                    <div class="course-modal-image">
                        <img src="../images/Fashion Styling Fundamentals.webp" alt="Fashion Styling Fundamentals">
                    </div>
                    <h4>Course Description</h4>
                    <p>This comprehensive course covers all the fundamentals of fashion styling, perfect for beginners and those looking to refresh their knowledge. You'll learn how to create cohesive looks for different body types, occasions, and personal styles.</p>
                    
                    <h4>What You'll Learn</h4>
                    <ul>
                        <li>Color theory and how to create harmonious color palettes</li>
                        <li>Understanding body shapes and dressing to flatter each type</li>
                        <li>How to mix patterns and textures effectively</li>
                        <li>Creating complete looks from head to toe</li>
                        <li>Accessorizing techniques to elevate any outfit</li>
                    </ul>
                    
                    <h4>Course Details</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 20px;">
                        <div>
                            <p><strong><i class="far fa-clock"></i> Duration:</strong> 6 weeks (self-paced)</p>
                            <p><strong><i class="fas fa-signal"></i> Level:</strong> Beginner</p>
                        </div>
                        <div>
                            <p><strong><i class="far fa-user"></i> Instructor:</strong> Jessica Taylor</p>
                            <p><strong><i class="far fa-file-alt"></i> Lessons:</strong> 15 video lessons</p>
                        </div>
                    </div>
                    
                    <h4>Who This Course Is For</h4>
                    <p>This course is perfect for anyone looking to improve their personal style, aspiring stylists, or fashion enthusiasts who want to understand the fundamentals of putting together great outfits.</p>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="/contact/" class="btn">Enroll Now - $129</a>
                    </div>
                `
            },
            2: {
                title: "Wardrobe Essentials",
                content: `
                    <div class="course-modal-image">
                        <img src="../images/Wardrobe Essentials.jpeg" alt="Wardrobe Essentials">
                    </div>
                    <h4>Course Description</h4>
                    <p>Transform your cluttered closet into a curated collection of versatile pieces that work for any occasion. This course teaches you how to identify and acquire timeless wardrobe staples that will serve you for years to come.</p>
                    
                    <h4>What You'll Learn</h4>
                    <ul>
                        <li>The 20 essential pieces every wardrobe needs</li>
                        <li>How to build a capsule wardrobe for your lifestyle</li>
                        <li>Quality indicators for long-lasting garments</li>
                        <li>Seasonal wardrobe transitions</li>
                        <li>Smart shopping strategies to maximize your budget</li>
                    </ul>
                    
                    <h4>Course Details</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 20px;">
                        <div>
                            <p><strong><i class="far fa-clock"></i> Duration:</strong> 4 weeks (self-paced)</p>
                            <p><strong><i class="fas fa-signal"></i> Level:</strong> Beginner</p>
                        </div>
                        <div>
                            <p><strong><i class="far fa-user"></i> Instructor:</strong> Sophia Rodriguez</p>
                            <p><strong><i class="far fa-file-alt"></i> Resources:</strong> Wardrobe audit template</p>
                        </div>
                    </div>
                    
                    <h4>Who This Course Is For</h4>
                    <p>This course is ideal for anyone who feels overwhelmed by their closet, wants to simplify their wardrobe, or is looking to make smarter fashion purchases that stand the test of time.</p>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="/contact/" class="btn">Enroll Now - $99</a>
                    </div>
                `
            },
            3: {
                title: "Sustainable Fashion",
                content: `
                    <div class="course-modal-image">
                        <img src="../images/Sustainable Fashion.jpeg"  alt="Sustainable Fashion">
                    </div>
                    <h4>Course Description</h4>
                    <p>Learn how to make eco-conscious fashion choices without sacrificing style. This course covers the environmental impact of the fashion industry and provides practical solutions for building a more sustainable wardrobe.</p>
                    
                    <h4>What You'll Learn</h4>
                    <ul>
                        <li>The environmental impact of fast fashion</li>
                        <li>How to identify truly sustainable brands</li>
                        <li>Secondhand shopping strategies</li>
                        <li>Clothing care techniques to extend garment life</li>
                        <li>Upcycling and creative mending methods</li>
                    </ul>
                    
                    <h4>Course Details</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 20px;">
                        <div>
                            <p><strong><i class="far fa-clock"></i> Duration:</strong> 5 weeks (self-paced)</p>
                            <p><strong><i class="fas fa-signal"></i> Level:</strong> All Levels</p>
                        </div>
                        <div>
                            <p><strong><i class="far fa-user"></i> Instructor:</strong> David Miller</p>
                            <p><strong><i class="far fa-file-alt"></i> Resources:</strong> Sustainable brand directory</p>
                        </div>
                    </div>
                    
                    <h4>Who This Course Is For</h4>
                    <p>This course is designed for anyone concerned about the environmental impact of fashion and looking to make more sustainable choices in their clothing purchases and care.</p>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="/contact/" class="btn">Enroll Now - $149</a>
                    </div>
                `
            },
            4: {
                title: "Fashion Trend Forecasting",
                content: `
                    <div class="course-modal-image">
                        <img src="../images/Fashion-Trend-Forecasting.jpg" alt="Fashion Trend Forecasting">
                    </div>
                    <h4>Course Description</h4>
                    <p>Learn how to identify and predict fashion trends before they hit the mainstream. This course will teach you the skills to stay ahead of the curve in the ever-changing world of fashion.</p>
                    
                    <h4>What You'll Learn</h4>
                    <ul>
                        <li>How to analyze runway shows and street style</li>
                        <li>Identifying emerging color palettes and silhouettes</li>
                        <li>Cultural and social influences on fashion trends</li>
                        <li>Creating trend reports and mood boards</li>
                        <li>Applying trend knowledge to styling and buying</li>
                    </ul>
                    
                    <h4>Course Details</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 20px;">
                        <div>
                            <p><strong><i class="far fa-clock"></i> Duration:</strong> 8 weeks (self-paced)</p>
                            <p><strong><i class="fas fa-signal"></i> Level:</strong> Intermediate</p>
                        </div>
                        <div>
                            <p><strong><i class="far fa-user"></i> Instructor:</strong> Jessica Taylor</p>
                            <p><strong><i class="far fa-file-alt"></i> Assignments:</strong> 4 practical projects</p>
                        </div>
                    </div>
                    
                    <h4>Who This Course Is For</h4>
                    <p>This course is perfect for aspiring fashion professionals, stylists, buyers, or anyone interested in understanding how trends develop and how to anticipate them.</p>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="/contact/" class="btn">Enroll Now - $179</a>
                    </div>
                `
            },
            5: {
                title: "Fashion Business Essentials",
                content: `
                    <div class="course-modal-image">
                        <img src="../images/FashionBusinessEssentials.jpg" alt="Fashion Business Essentials">
                    </div>
                    <h4>Course Description</h4>
                    <p>Gain the business knowledge needed to launch and grow your own fashion brand or retail business. This comprehensive course covers all aspects of the fashion business.</p>
                    
                    <h4>What You'll Learn</h4>
                    <ul>
                        <li>Developing a business plan for fashion ventures</li>
                        <li>Sourcing materials and manufacturing</li>
                        <li>Branding and marketing strategies</li>
                        <li>Retail math and financial planning</li>
                        <li>E-commerce and digital strategies</li>
                    </ul>
                    
                    <h4>Course Details</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 20px;">
                        <div>
                            <p><strong><i class="far fa-clock"></i> Duration:</strong> 10 weeks (self-paced)</p>
                            <p><strong><i class="fas fa-signal"></i> Level:</strong> Advanced</p>
                        </div>
                        <div>
                            <p><strong><i class="far fa-user"></i> Instructor:</strong> Michael Chen</p>
                            <p><strong><i class="far fa-file-alt"></i> Resources:</strong> Business plan templates</p>
                        </div>
                    </div>
                    
                    <h4>Who This Course Is For</h4>
                    <p>This course is designed for aspiring fashion entrepreneurs, small business owners, or anyone looking to transition into the business side of the fashion industry.</p>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="/contact/" class="btn">Enroll Now - $249</a>
                    </div>
                `
            },
            6: {
                title: "Personal Styling Masterclass",
                content: `
                    <div class="course-modal-image">
                        <img src="../images/Personal Styling Masterclass.webp" alt="Personal Styling Masterclass">
                    </div>
                    <h4>Course Description</h4>
                    <p>Develop your personal styling skills to help clients discover their unique style and build confidence through clothing. This masterclass covers both the creative and business aspects of personal styling.</p>
                    
                    <h4>What You'll Learn</h4>
                    <ul>
                        <li>Conducting client consultations and style assessments</li>
                        <li>Creating personalized style guides</li>
                        <li>Shopping with and for clients</li>
                        <li>Building a styling portfolio</li>
                        <li>Marketing your styling services</li>
                    </ul>
                    
                    <h4>Course Details</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 20px;">
                        <div>
                            <p><strong><i class="far fa-clock"></i> Duration:</strong> 6 weeks (self-paced)</p>
                            <p><strong><i class="fas fa-signal"></i> Level:</strong> Intermediate</p>
                        </div>
                        <div>
                            <p><strong><i class="far fa-user"></i> Instructor:</strong> Sophia Rodriguez</p>
                            <p><strong><i class="far fa-file-alt"></i> Assignments:</strong> 3 client case studies</p>
                        </div>
                    </div>
                    
                    <h4>Who This Course Is For</h4>
                    <p>This course is ideal for aspiring personal stylists, image consultants, or anyone looking to turn their passion for fashion into a professional styling service.</p>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="/contact/" class="btn">Enroll Now - $199</a>
                    </div>
                `
            }
        };
        
        // Open modal with course details
        viewCourseBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const courseId = btn.getAttribute('data-course');
                const course = courses[courseId];
                
                document.getElementById('modalCourseTitle').textContent = course.title;
                document.getElementById('modalCourseContent').innerHTML = course.content;
                courseModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close modal
        closeModal.addEventListener('click', () => {
            courseModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === courseModal) {
                courseModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
   