document.addEventListener('DOMContentLoaded', function() {

// SERVICES START 

    const services = [
        
        
        {
            title: "🔷  SIM INFORMATION ",
            description: " যেকোনো সিম কার নামে রেজিষ্ট্রেশন করা তার সেই NID এবং সম্পূর্ণ পরিচয় বের করে নিতে পারবেন এই সার্ভিস এর মাধ্যমে। ",
            prices: [
                { provider: "GP", price: "140" },
                { provider: "BL", price: "130" },
                { provider: "ROBI", price: "170" },
                { provider: "AIRTEL", price: "170" },
                { provider: "TALITOLK", price: "270" }
            ]
        },


        {
            title: "🔷  LIVE LOCATION ",
            description: "যেকোনো সিম এর লাইভ লোকেশন বের করতে পারবেন এই সার্ভিস এর মাধ্যমে।  সিম খোলা থাকলে বর্তমান লাইভ লোকেশন পাবেন। সিম বন্ধ থাকলে সেই সিম বন্ধ হওয়ার আগে যেখানে ছিলো সেটার লোকেশন পাবেন।",
            prices: [
                { provider: "GP", price: "530" },
                { provider: "BL", price: "530" },
                { provider: "ROBI", price: "540" },
                { provider: "AIRTEL", price: "520" },
                { provider: "TALITOLK", price: "500" }
            ]
        },


        {
            title: "🔷 SIM BLOCK ",
            description: "যেকারো সিম ডিজাবেল করে দিতে পারবেন এই সার্ভিস এর মাধ্যমে। অর্থাৎ  যে সিম ডিজাবেল করবে সেটা দিয়ে কেউ কল করতে  পারবে না রিসিভও করতে পারবে না। ",
            prices: [
                { provider: "GP", price: "180" },
                { provider: "BL", price: "160" },
                { provider: "ROBI", price: "170" },
                { provider: "AIRTEL", price: "170" },
                { provider: "TALITOLK", price: "200" }
            ]
        },

        
        {
            title: "🔷 NID TO ALL NUMBER ",
            description: "এইটার মাধ্যামে আপনি যেকোনো এনআইডি নাম্বার থেকে সেই এনআইডি দিয়ে মোট কয়টা সিম রেজিষ্ট্রেশন করা সেই সকল নাম্বার দেখতে পারবেন। ",
            prices: [
                { provider: "ANY NID", price: "650" },
            ]
        },


        {
            title: "🔷 ACCOUNT INFORMATION ",
            description: "এটার মধ্যে আপনি বিকাশ রকেট কার NID দিয়ে ভেরিফাই করা সেই NID এবং সেই লোকের সম্পূর্ণ তথ্য পাবেন। ",
            prices: [
                { provider: "BKASH", price: "1900" },
                { provider: "ROCKET", price: "1700" }
            ]
        },


        {
            title: "🔷 NID CARD ",
            description: "এটার মাধ্যম যে কারো ফরম নাম্বার, NID নাম্বার আথবা ভোটার নাম্বার দিয়ে সেই NID কার্ডটা বের করে নিতে পারবেন। কোন ফেইজ ভেরিফাই করতে হবে না। ",
            prices: [
                { provider: "FROM NUMBER", price: "150" },
                { provider: "NID NUMBER", price: "150" },
                { provider: "VOTER NUMBER", price: "155" }
            ]
        },


        {
            title: "🔷 SIM CALL LIST ",
            description: " এইটার মাধ্যমে যে কোন নাম্বারের লাস্ট ৩ মাসের কল লিস্ট লোকেশন বাহির করা হয়। অর্থাৎ ৩ মাসে যত নাম্বারে কথা বলছে সে সকল নাম্বার & ঠিকানা এবং ঐ ফোনের IMEI নাম্বার পাবেন।",
            prices: [
                { provider: "ANY SIM", price: "2100" }
            ]
        },


        {
            title: "🔷 BLOCK BIKASH ACCOUNT ",
            description: " এটার মাধ্যম যে কারো বিকাশ নাম্বার লক করে দিতে পারবেন। অর্থাৎ যে বিকাশ লক করে দিবেন সেটা দিয়ে সে আর লেনদেন করতে পারবে না, বিকাশে টাকা থাকলে সেটাও তুলতে পারবে না।",
            prices: [
                { provider: "PERSONAL BKASH", price: "1100" }
            ]
        }
    ];
    
//   SERVICES END

    const servicesContainer = document.getElementById('services-container');
    let activeCard = null;

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        // Create price list HTML
        let priceListHTML = '<div class="price-info"><div class="price-list">';
        service.prices.forEach(item => {
            priceListHTML += `
                <div class="price-item">
                    <span>${item.provider}</span>
                    <span>${item.price}৳</span>
                </div>
            `;
        });
        priceListHTML += '</div></div>';
        
        serviceCard.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            ${priceListHTML}
        `;
        
        // Add click event to toggle price info
        serviceCard.addEventListener('click', function() {
            const priceInfo = this.querySelector('.price-info');
            
            // Close all other cards first
            if (activeCard && activeCard !== this) {
                activeCard.querySelector('.price-info').classList.remove('show');
                activeCard.classList.remove('active');
            }
            
            // Toggle current card
            priceInfo.classList.toggle('show');
            this.classList.toggle('active');
            
            // Update active card reference
            activeCard = priceInfo.classList.contains('show') ? this : null;
        });
        
        servicesContainer.appendChild(serviceCard);
    });

    // Create floating particles for visual effect
    createFloatingParticles();
});

function createFloatingParticles() {
    const colors = ['#6e00ff', '#ff00e4', '#00ffea'];
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Apply styles
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            top: ${posY}vh;
            left: ${posX}vw;
            opacity: ${Math.random() * 0.4 + 0.1};
            z-index: 0;
            pointer-events: none;
            animation: float-particle ${duration}s ease-in-out ${delay}s infinite;
            filter: blur(${size/2}px);
        `;
        
        document.body.appendChild(particle);
    }
    
    // Add keyframes for particle animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float-particle {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}