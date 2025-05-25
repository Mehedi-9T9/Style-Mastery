
   

      // Course Details Modal
      const courseModal = document.getElementById("courseModal");
      const courseModalBody = document.getElementById("courseModalBody");
      const courseDetailBtns = document.querySelectorAll(".course-details-btn");

      // Course data
      const courses = {
        1: {
          title: "Wardrobe Essentials Masterclass",
          image:
            "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          description:
            "<p>This comprehensive course teaches you how to build a versatile wardrobe with timeless pieces that work for any occasion. You'll learn:</p><ul><li>How to identify quality garments that last</li><li>The essential items every wardrobe needs</li><li>Strategies for mixing and matching pieces</li><li>Seasonal wardrobe transitions</li><li>Smart shopping techniques to maximize your budget</li></ul><p>By the end of this course, you'll have a curated wardrobe that makes getting dressed effortless and enjoyable.</p>",
          duration: "4 weeks",
          level: "Beginner to Intermediate",
          instructor: "Emma Thompson",
        },
        2: {
          title: "Personal Styling Fundamentals",
          image:
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          description:
            "<p>Discover your unique style identity with our Personal Styling Fundamentals course. This program covers:</p><ul><li>Body type analysis and flattering silhouettes</li><li>Color theory and finding your perfect palette</li><li>Developing a signature style</li><li>Dressing for different occasions</li><li>Accessorizing to complete your look</li></ul><p>You'll receive personalized feedback and create a style guide tailored specifically to you.</p>",
          duration: "6 weeks",
          level: "All Levels",
          instructor: "Sophia Rodriguez",
        },
        3: {
          title: "Fashion Trends Decoded",
          image:
            "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
          description:
            "<p>Stay ahead of the fashion curve with our Trends Decoded course. You'll learn:</p><ul><li>How to identify emerging trends</li><li>Evaluating which trends work for your style</li><li>Incorporating trends without overhauling your wardrobe</li><li>Trend forecasting techniques</li><li>Sustainable ways to participate in trends</li></ul><p>This course includes access to our exclusive trend reports and seasonal updates.</p>",
          duration: "5 weeks",
          level: "Intermediate",
          instructor: "James Wilson",
        },
      };

      courseDetailBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const courseId = btn.getAttribute("data-course");
          const course = courses[courseId];

          courseModalBody.innerHTML = `
                    <div class="course-modal-content">
                        <div class="course-modal-image" style="margin-bottom: 30px;">
                            <img src="${course.image}" alt="${course.title}" style="width: 100%; border-radius: var(--border-radius);">
                        </div>
                        <h2>${course.title}</h2>
                        ${course.description}
                        <div class="course-details" style="margin-top: 30px; background-color: var(--light-gray); padding: 20px; border-radius: var(--border-radius);">
                            <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
                                <div style="margin-bottom: 15px;">
                                    <h4 style="font-size: 1rem; color: var(--gray-color); margin-bottom: 5px;">Duration</h4>
                                    <p>${course.duration}</p>
                                </div>
                                <div style="margin-bottom: 15px;">
                                    <h4 style="font-size: 1rem; color: var(--gray-color); margin-bottom: 5px;">Level</h4>
                                    <p>${course.level}</p>
                                </div>
                                <div style="margin-bottom: 15px;">
                                    <h4 style="font-size: 1rem; color: var(--gray-color); margin-bottom: 5px;">Instructor</h4>
                                    <p>${course.instructor}</p>
                                </div>
                            </div>
                        </div>
                        <div style="text-align: center; margin-top: 30px;">
                            <a href="/contact/" class="btn">Enroll Now</a>
                        </div>
                    </div>
                `;

          courseModal.style.display = "block";
          document.body.style.overflow = "hidden";
        });
      });

      // Blog Details Modal
      const blogModal = document.getElementById("blogModal");
      const blogModalBody = document.getElementById("blogModalBody");
      const blogDetailBtns = document.querySelectorAll(".blog-details-btn");

      // Blog data
      const blogs = {
        1: {
          title: "How to Build a Capsule Wardrobe for Every Season",
          image:
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          date: "Jan 15, 2025",
          author: "Emma Thompson",
          content: `
                    <p>A capsule wardrobe is a curated collection of essential clothing items that don't go out of fashion and can be mixed and matched to create a variety of outfits. The concept was popularized in the 1970s by London boutique owner Susie Faux and later by designer Donna Karan.</p>
                    
                    <h3 style="margin-top: 30px;">Step 1: Assess Your Lifestyle</h3>
                    <p>Before building your capsule wardrobe, consider your daily activities, work environment, and personal style. A teacher's needs will differ from a corporate executive's.</p>
                    
                    <h3 style="margin-top: 30px;">Step 2: Choose a Color Palette</h3>
                    <p>Select 3-4 neutral base colors (black, navy, gray, beige) and 2-3 accent colors that complement your skin tone and can mix well together.</p>
                    
                    <h3 style="margin-top: 30px;">Step 3: Identify Core Pieces</h3>
                    <p>Every capsule wardrobe should include:</p>
                    <ul>
                        <li>2-3 pairs of quality bottoms (jeans, trousers, skirt)</li>
                        <li>5-7 tops that can layer</li>
                        <li>1-2 dresses (if appropriate for your lifestyle)</li>
                        <li>1-2 jackets or blazers</li>
                        <li>1 coat appropriate for your climate</li>
                        <li>2 pairs of shoes (one casual, one dressy)</li>
                    </ul>
                    
                    <h3 style="margin-top: 30px;">Step 4: Seasonal Rotation</h3>
                    <p>Store off-season items to keep your closet clutter-free. Rotate pieces as temperatures change, keeping about 30-40 items in active use at any time.</p>
                    
                    <h3 style="margin-top: 30px;">Step 5: Maintenance</h3>
                    <p>Regularly assess your wardrobe, repairing or replacing worn items. Add trend pieces sparingly if desired, but focus on maintaining your core collection.</p>
                    
                    <p style="margin-top: 30px;">A well-planned capsule wardrobe saves time, reduces decision fatigue, and helps you develop a more cohesive personal style. It's also an environmentally friendly approach to fashion.</p>
                `,
        },
        2: {
          title: "Color Theory for Personal Style: Finding Your Palette",
          image:
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          date: "Feb 02, 2025",
          author: "Sophia Rodriguez",
          content: `
                    <p>Understanding color theory is essential for developing a flattering personal style. The colors you wear can dramatically affect how you look and how others perceive you.</p>
                    
                    <h3 style="margin-top: 30px;">The Basics of Color Analysis</h3>
                    <p>Traditional color analysis categorizes people into seasons (Winter, Spring, Summer, Autumn) based on their natural coloring - skin tone, hair color, and eye color.</p>
                    
                    <h3 style="margin-top: 30px;">Determining Your Undertone</h3>
                    <p>Your skin's undertone (warm, cool, or neutral) is key to finding your best colors:</p>
                    <ul>
                        <li><strong>Warm undertones:</strong> Skin has yellow, peachy, or golden hues. Veins appear greenish.</li>
                        <li><strong>Cool undertones:</strong> Skin has pink, red, or bluish hues. Veins appear blue or purple.</li>
                        <li><strong>Neutral undertones:</strong> A mix of warm and cool characteristics.</li>
                    </ul>
                    
                    <h3 style="margin-top: 30px;">Seasonal Color Palettes</h3>
                    <p><strong>Winter:</strong> High contrast between skin, hair, and eyes. Best in clear, vivid colors like black, white, navy, and jewel tones.</p>
                    <p><strong>Spring:</strong> Warm, light coloring. Flourishes in clear, warm colors like coral, peach, and golden yellow.</p>
                    <p><strong>Summer:</strong> Cool, muted coloring. Looks best in soft, cool tones like powder blue, lavender, and rose.</p>
                    <p><strong>Autumn:</strong> Warm, rich coloring. Enhanced by earthy tones like olive green, mustard, and burnt orange.</p>
                    
                    <h3 style="margin-top: 30px;">Practical Application</h3>
                    <p>Once you've identified your season:</p>
                    <ol>
                        <li>Build your wardrobe around your best neutral colors (for basics and investment pieces)</li>
                        <li>Use your accent colors for tops, accessories, and statement pieces</li>
                        <li>Keep a color swatch with you when shopping</li>
                        <li>Don't be afraid to experiment - these are guidelines, not strict rules</li>
                    </ol>
                    
                    <p style="margin-top: 30px;">Wearing colors that complement your natural coloring will make you look healthier, more vibrant, and put-together with minimal effort.</p>
                `,
        },
        3: {
          title: "Sustainable Fashion: How to Build an Eco-Friendly Wardrobe",
          image:
            "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          date: "Mar 10, 2025",
          author: "James Wilson",
          content: `
                    <p>The fashion industry is one of the largest polluters globally. Building a sustainable wardrobe is an impactful way to reduce your environmental footprint while still expressing your personal style.</p>
                    
                    <h3 style="margin-top: 30px;">The Problem with Fast Fashion</h3>
                    <p>Fast fashion contributes to:</p>
                    <ul>
                        <li>Massive textile waste (85% of textiles end up in landfills)</li>
                        <li>Water pollution from dyeing processes</li>
                        <li>Poor working conditions in manufacturing countries</li>
                        <li>Overconsumption of low-quality garments</li>
                    </ul>
                    
                    <h3 style="margin-top: 30px;">Principles of Sustainable Fashion</h3>
                    <p><strong>Quality Over Quantity:</strong> Invest in fewer, better-made pieces that last longer.</p>
                    <p><strong>Natural Fibers:</strong> Choose organic cotton, linen, hemp, wool, or silk over synthetic materials that shed microplastics.</p>
                    <p><strong>Secondhand First:</strong> Buying used extends a garment's life and keeps it out of landfills.</p>
                    <p><strong>Ethical Production:</strong> Support brands with transparent, fair labor practices.</p>
                    
                    <h3 style="margin-top: 30px;">Building a Sustainable Wardrobe</h3>
                    <p><strong>1. Audit Your Current Wardrobe:</strong> Take inventory of what you own, repair damaged items, and donate what you don't wear.</p>
                    <p><strong>2. Develop a Needs List:</strong> Identify gaps in your wardrobe before shopping to prevent impulse buys.</p>
                    <p><strong>3. Shop Secondhand:</strong> Explore thrift stores, consignment shops, and online resale platforms.</p>
                    <p><strong>4. Choose Sustainable Brands:</strong> When buying new, research brands' sustainability practices.</p>
                    <p><strong>5. Care for Your Clothes:</strong> Wash less frequently, use cold water, and air dry to extend garment life.</p>
                    
                    <h3 style="margin-top: 30px;">Sustainable Fashion on a Budget</h3>
                    <p>Sustainability isn't just for those who can afford expensive ethical brands:</p>
                    <ul>
                        <li>Organize clothing swaps with friends</li>
                        <li>Learn basic mending skills</li>
                        <li>Rent special occasion wear</li>
                        <li>Buy off-season for discounts on quality pieces</li>
                    </ul>
                    
                    <p style="margin-top: 30px;">Transitioning to a sustainable wardrobe is a process. Start with small changes and build over time. Every conscious choice makes a difference.</p>
                `,
        },
      };

      blogDetailBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const blogId = btn.getAttribute("data-blog");
          const blog = blogs[blogId];

          blogModalBody.innerHTML = `
                    <div class="blog-modal-content">
                        <h2>${blog.title}</h2>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; color: var(--gray-color);">
                            <span>${blog.date}</span>
                            <span>By ${blog.author}</span>
                        </div>
                        <div class="blog-modal-image" style="margin-bottom: 30px;">
                            <img src="${blog.image}" alt="${blog.title}" style="width: 100%; border-radius: var(--border-radius);">
                        </div>
                        ${blog.content}
                        <div style="margin-top: 40px; text-align: center;">
                            <a href="/blog/" class="btn">View More Articles</a>
                        </div>
                    </div>
                `;

          blogModal.style.display = "block";
          document.body.style.overflow = "hidden";
        });
      });

      // Close modals
      const closeModalBtns = document.querySelectorAll(".close-modal");
      closeModalBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          courseModal.style.display = "none";
          blogModal.style.display = "none";
          successModal.style.display = "none";
          document.body.style.overflow = "auto";
        });
      });

      // Close modals when clicking outside
      window.addEventListener("click", (e) => {
        if (e.target === courseModal) {
          courseModal.style.display = "none";
          document.body.style.overflow = "auto";
        }
        if (e.target === blogModal) {
          blogModal.style.display = "none";
          document.body.style.overflow = "auto";
        }
        if (e.target === successModal) {
          successModal.style.display = "none";
          document.body.style.overflow = "auto";
        }
      });

      // Close success modal
      const closeSuccessModal = document.getElementById("closeSuccessModal");
      const successModal = document.getElementById("successModal");

      closeSuccessModal.addEventListener("click", () => {
        successModal.style.display = "none";
        document.body.style.overflow = "auto";
      });

      // Form submission
      const contactForms = document.querySelectorAll("form");
      contactForms.forEach((form) => {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          successModal.style.display = "block";
          document.body.style.overflow = "hidden";
          form.reset();
        });
      });
   