document.addEventListener('DOMContentLoaded', () => {
    const contentData = {
        'guide-first-plant': {
            title: 'Choosing Your First Houseplant',
            image: 'https://images.unsplash.com/photo-1592150621744-aca64f9de881?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
            alt: 'A healthy, green snake plant in a white pot against a clean background.',
            content: `
                <p>Starting your plant journey is exciting! The key to success is choosing a plant that is forgiving and suits your environment. Here are three of the best houseplants for beginners:</p>
                <ul>
                    <li><strong>Snake Plant (Sansevieria trifasciata):</strong> Almost indestructible. It tolerates low light and infrequent watering. Its upright leaves add a modern, architectural element to any room.</li>
                    <li><strong>Pothos (Epipremnum aureum):</strong> A fast-growing vine that tells you when it's thirsty with slightly drooping leaves. It thrives in a range of light conditions and is incredibly easy to propagate.</li>
                    <li><strong>ZZ Plant (Zamioculcas zamiifolia):</strong> The perfect plant for the forgetful waterer. Its rhizomes store water, so it can go weeks without a drink. It also tolerates low light very well.</li>
                </ul>
                <p>When you bring your first plant home, place it in a spot with appropriate light and avoid the temptation to overwater. Let the top inch or two of soil dry out first. Welcome to the plant parent club!</p>
            `
        },
        'guide-sunlight': {
            title: 'Understanding Sunlight for Houseplants',
            image: 'https://images.unsplash.com/photo-1536069221202-8c8499366b8a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
            alt: 'Sunlight streaming through a window onto a collection of houseplants.',
            content: `
                <p>"Bright, indirect light" is the most common requirement on plant tags, but what does it mean? Let's break down the different types of light in your home:</p>
                <ul>
                    <li><strong>Direct Light:</strong> The sun's rays hit the plant directly for several hours. This is common in south-facing or unobstructed west-facing windows. It's often too intense for many tropical plants, but great for succulents and cacti.</li>
                    <li><strong>Bright, Indirect Light:</strong> The sweet spot for most houseplants. This is a bright spot that doesn't get direct sun, like a few feet away from a sunny window, or right in an east-facing window.</li>
                    <li><strong>Medium Light:</strong> A spot that receives indirect light for part of the day, or is further from a light source. North-facing windows typically provide medium to low light.</li>
                    <li><strong>Low Light:</strong> This doesn't mean "no light." It means a spot far from a window or in a room with small windows. Snake Plants and ZZ Plants are famous for tolerating low light.</li>
                </ul>
                <p>To assess your light, observe a spot throughout the day. See where the sunbeams fall and for how long. This will help you match the perfect plant to the perfect place.</p>
            `
        },
        'guide-watering': {
            title: 'Watering 101: The Golden Rule',
            image: 'https://images.unsplash.com/photo-1599224511855-3c34ad5a490b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
            alt: 'A hand gently watering a small potted plant with a watering can.',
            content: `
                <p>Overwatering is the number one killer of houseplants. Roots need oxygen, and when soil is constantly waterlogged, they suffocate and rot. The golden rule is simple: <strong>check the soil before you water.</strong></p>
                <h3>How to Check Soil Moisture:</h3>
                <p>The easiest method is the finger test. Stick your index finger about 1-2 inches into the soil.
                <ul>
                    <li>If the soil feels moist, wait to water.</li>
                    <li>If the soil feels dry, it's time to water.</li>
                </ul>
                <h3>How to Water Correctly:</h3>
                <p>When it's time to water, do it thoroughly. Pour water evenly over the soil surface until it flows freely out of the drainage holes at the bottom of the pot. This ensures the entire root ball gets a drink. After watering, discard any excess water from the saucer to prevent the plant from sitting in water.</p>
            `
        },
        'guide-diy-toolkit': {
            title: 'Your First DIY Toolkit: The 5 Must-Haves',
            image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
            alt: 'A neatly organized set of essential hand tools.',
            content: `
                <p>You don't need a professional workshop to start creating. A small, well-chosen set of tools can handle the vast majority of beginner DIY projects. Here are the five essentials we recommend for every new toolkit.</p>
                <ul>
                    <li><strong>Cordless Drill/Driver:</strong> The workhorse of any toolkit. Perfect for drilling holes and driving screws. Look for a model with a variable speed trigger and an adjustable clutch.</li>
                    <li><strong>Tape Measure:</strong> Accuracy is key in DIY. A sturdy 25-foot tape measure is a non-negotiable for getting your projects right.</li>
                    <li><strong>Claw Hammer:</strong> For more than just hanging pictures. A 16-ounce hammer is versatile enough for assembling projects and for light demolition.</li>
                    <li><strong>Utility Knife:</strong> From opening boxes to scoring drywall, a sharp utility knife with a retractable blade is an indispensable tool.</li>
                    <li><strong>Level:</strong> Whether you're hanging a shelf or building a frame, a 24-inch level ensures your work is perfectly horizontal or vertical.</li>
                </ul>
            `
        },
        'guide-diy-safety': {
            title: 'DIY Safety Fundamentals',
            image: 'https://images.unsplash.com/photo-1667627879457-6405b3183f00?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
            alt: 'A person wearing safety glasses and gloves while working on a DIY project.',
            content: `
                <p>Working with tools is rewarding, but safety must always come first. These are the non-negotiable rules to follow before you start any project.</p>
                <ul>
                    <li><strong>Always Wear Safety Glasses:</strong> Protect your eyes from dust, debris, and flying objects. This is the most important rule of DIY.</li>
                    <li><strong>Protect Your Hearing:</strong> Power tools like saws and sanders can be loud. Use earplugs or earmuffs to prevent hearing damage.</li>
                    <li><strong>Read the Manual:</strong> Every tool is different. Understand how your specific tool works, including its safety features, before you plug it in.</li>
                    <li><strong>Keep a Tidy Workspace:</strong> A cluttered area is a dangerous area. Keep your workspace clean to prevent trips, falls, and other accidents.</li>
                    <li><strong>Disconnect Power:</strong> Always unplug tools before changing blades or bits. Never leave a power tool running unattended.</li>
                </ul>
            `
        },
        'plan-picture-frame': {
            title: 'First Project: A Simple Picture Frame',
            image: 'https://images.unsplash.com/photo-1593106578513-bb232a73b3d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
            alt: 'A simple, stylish wooden picture frame hanging on a wall.',
            content: `
                <p>This project is the perfect introduction to basic woodworking. You'll learn to measure, cut, and join wood to create something beautiful and functional. It's a rewarding project that you can complete in an afternoon.</p>
                <h3>Materials & Tools:</h3>
                <ul>
                    <li>1x2 lumber (a single 8-foot piece is plenty)</li>
                    <li>Wood glue</li>
                    <li>Sandpaper (medium and fine grit)</li>
                    <li>Wood finish (paint, stain, or oil)</li>
                    <li><strong>Tools:</strong> Tape measure, pencil, hand saw with miter box (or a miter saw), clamps.</li>
                </ul>
                <h3>Steps:</h3>
                <ol>
                    <li><strong>Measure:</strong> Decide on the size of your picture (e.g., 8x10 inches). Remember to account for the width of the wood.</li>
                    <li><strong>Cut:</strong> Using your miter box or miter saw, cut four pieces of wood at 45-degree angles. You'll need two pieces for the height and two for the width. The long side of each piece should match the dimensions of your picture.</li>
                    <li><strong>Assemble:</strong> Apply a thin layer of wood glue to the angled cuts and join the corners to form a rectangle. Use clamps to hold the frame together tightly while the glue dries.</li>
                    <li><strong>Sand & Finish:</strong> Once the glue is dry, sand the entire frame smooth, starting with medium grit and finishing with fine grit sandpaper. Apply your chosen paint or stain and let it dry completely.</li>
                </ol>
                <p>Congratulations! You've just built your first project. Now you can add your favorite photo and display your handiwork.</p>
            `
        },
        'guide-color-rule': {
            title: 'The 60-30-10 Color Rule',
            image: 'https://images.unsplash.com/photo-1534349762230-e08878301595?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
            alt: 'A living room with a balanced color scheme of blue, white, and gold accents.',
            content: `
                <p>The 60-30-10 rule is a classic interior design principle that helps you create a balanced and harmonious color palette. It's easy to remember and apply to any room.</p>
                <ul>
                    <li><strong>60% Main Color:</strong> This is the dominant color in your room, covering about 60% of the space. It's usually the wall color, and perhaps a large rug or sofa. It serves as the backdrop for everything else.</li>
                    <li><strong>30% Secondary Color:</strong> This color takes up about half as much space as your main color. It's used for things like curtains, accent chairs, or bed linens. It should support the main color but be different enough to add interest.</li>
                    <li><strong>10% Accent Color:</strong> This is your pop of color! It's used sparingly on small items like throw pillows, decorative accessories, and artwork. This is where you can be bold and have fun.</li>
                </ul>
                <p>By following this simple ratio, you can create a color scheme that feels intentional and professionally designed, preventing your room from feeling either too bland or too chaotic.</p>
            `
        },
        'guide-focal-point': {
            title: 'Creating a Focal Point',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3',
            alt: 'A well-arranged bookshelf that serves as a focal point in a room.',
            content: `
                <p>A focal point is the star of the room. It's the first thing that catches your eye when you enter and it helps to anchor the space. Some rooms have a natural focal point, like a fireplace or a large window with a view. If your room doesn't have one, you can create one!</p>
                <h3>How to Create a Focal Point:</h3>
                <ul>
                    <li><strong>Accent Wall:</strong> Paint one wall a bold color or apply interesting wallpaper.</li>
                    <li><strong>Large-Scale Art:</strong> A single, oversized piece of art can instantly command attention.</li>
                    <li><strong>Statement Furniture:</strong> A unique piece of furniture, like a brightly colored armchair or a dramatic headboard, can serve as a focal point.</li>
                    <li><strong>Gallery Wall:</strong> A well-curated collection of smaller art pieces or photos can act as a single, impactful focal point.</li>
                </ul>
                <p>Once you've established your focal point, arrange your furniture around it to emphasize its importance. This will give your room a sense of purpose and deliberate design.</p>
            `
        },
        'story-anya': {
            title: 'Decorating on a Budget: Anya\'s Story',
            image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
            alt: 'A bedroom decorated with thrifted and upcycled furniture and decor items.',
            content: `
                <p>Style doesn't have to be expensive. In fact, some of the most unique and personal spaces are created on a tight budget. The key is creativity and a willingness to see the potential in overlooked items.</p>
                <h3>The Art of Thrifting:</h3>
                <p>Secondhand stores, flea markets, and online marketplaces are treasure troves for home decor. Look for items with good "bones"—solid wood furniture, interesting shapes, and quality materials. A fresh coat of paint or new hardware can completely transform a dated piece.</p>
                <h3>Upcycling and DIY:</h3>
                <p>Before you buy something new, ask yourself if you can make it. Simple projects like sewing your own pillow covers, painting a piece of abstract art, or building a rustic shelf can save you money and add a personal touch to your home.</p>
                <h3>Shop Your Own Home:</h3>
                <p>Sometimes the best decor is already in your house. "Shop" your own rooms and see if you can rearrange furniture, swap art, or move plants to give a space a fresh look without spending a dime. A new arrangement can make a room feel entirely new.</p>
            `
        },
        'default': {
            title: 'Content Not Found',
            image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
            alt: 'A person looking at a map with a confused expression.',
            content: `
                <p>Oops! It looks like the content you're looking for isn't here. Please check the link and try again, or navigate back to one of our main pages to explore more guides and projects.</p>
                <a href="/" class="showcase__button">Back to Home</a>
            `
        }
    };

    const contentTarget = document.getElementById('showcase-content');
    // Only run the script if the target element exists on the page.
    if (!contentTarget) {
        return;
    }

    /**
     * Retrieves the correct article data based on the URL hash.
     * @returns {object} The article data.
     */
    function getArticleData() {
        const hash = window.location.hash.substring(1);
        return contentData[hash] || contentData['default'];
    }

    /**
     * Renders the article content into the target element.
     * @param {object} articleData - The data for the article to render.
     */
    function renderArticle(articleData) {
        const articleHTML = `
            <div class="showcase__container">
                <article class="showcase-article">
                    <header class="showcase-article__header">
                        <h1 class="showcase-article__title">${articleData.title}</h1>
                    </header>
                    <img src="${articleData.image}" alt="${articleData.alt}" class="showcase-article__image">
                    <div class="showcase-article__content">
                        ${articleData.content}
                    </div>
                </article>
            </div>
        `;
        contentTarget.innerHTML = articleHTML;
        document.title = `${articleData.title} | Verdant Haven`;
    }

    const articleData = getArticleData();
    renderArticle(articleData);

    // Add an event listener for hash changes to re-render content
    window.addEventListener('hashchange', () => {
        const newArticleData = getArticleData();
        renderArticle(newArticleData);
    });
});