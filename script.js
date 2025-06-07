// Services Data
const services = [
 
 //start service card 
 
   
    {
        "id": 1,
        "title": "SIM INFORMATION",
        "description": "যেকোনো সিম কার নামে রেজিষ্ট্রেশন করা তার সেই NID এবং সম্পূর্ণ পরিচয় বের করে নিতে পারবেন এই সার্ভিস এর মাধ্যমে।",
        "options": [
            { "name": "GP", "price": "140 টাকা" },
            { "name": "BL", "price": "130 টাকা" },
            { "name": "ROBI", "price": "170 টাকা" },
            { "name": "AIRTEL", "price": "170 টাকা" },
            { "name": "TALITOLK", "price": "270 টাকা" }
        ]
    },
    {
        "id": 2,
        "title": "LIVE LOCATION",
        "description": "যেকোনো সিম এর লাইভ লোকেশন বের করতে পারবেন এই সার্ভিস এর মাধ্যমে। সিম খোলা থাকলে বর্তমান লাইভ লোকেশন পাবেন। সিম বন্ধ থাকলে সেই সিম বন্ধ হওয়ার আগে যেখানে ছিলো সেটার লোকেশন পাবেন।",
        "options": [
            { "name": "GP", "price": "530 টাকা" },
            { "name": "BL", "price": "530 টাকা" },
            { "name": "ROBI", "price": "540 টাকা" },
            { "name": "AIRTEL", "price": "520 টাকা" },
            { "name": "TALITOLK", "price": "500 টাকা" }
        ]
    },
    {
        "id": 3,
        "title": "SIM BLOCK",
        "description": "যেকারো সিম ডিজাবেল করে দিতে পারবেন এই সার্ভিস এর মাধ্যমে। অর্থাৎ যে সিম ডিজাবেল করবে সেটা দিয়ে কেউ কল করতে পারবে না রিসিভও করতে পারবে না।",
        "options": [
            { "name": "GP", "price": "180 টাকা" },
            { "name": "BL", "price": "160 টাকা" },
            { "name": "ROBI", "price": "170 টাকা" },
            { "name": "AIRTEL", "price": "170 টাকা" },
            { "name": "TALITOLK", "price": "200 টাকা" }
        ]
    },
    {
        "id": 4,
        "title": "NID TO ALL NUMBER",
        "description": "এইটার মাধ্যামে আপনি যেকোনো এনআইডি নাম্বার থেকে সেই এনআইডি দিয়ে মোট কয়টা সিম রেজিষ্ট্রেশন করা সেই সকল নাম্বার দেখতে পারবেন।",
        "options": [
            { "name": "ANY NID", "price": "650 টাকা" }
        ]
    },
    {
        "id": 5,
        "title": "ACCOUNT INFORMATION",
        "description": "এটার মধ্যে আপনি বিকাশ রকেট কার NID দিয়ে ভেরিফাই করা সেই NID এবং সেই লোকের সম্পূর্ণ তথ্য পাবেন।",
        "options": [
            { "name": "BKASH", "price": "1900 টাকা" },
            { "name": "ROCKET", "price": "1700 টাকা" }
        ]
    },
    {
        "id": 6,
        "title": "NID CARD",
        "description": "এটার মাধ্যম যে কারো ফরম নাম্বার, NID নাম্বার আথবা ভোটার নাম্বার দিয়ে সেই NID কার্ডটা বের করে নিতে পারবেন। কোন ফেইজ ভেরিফাই করতে হবে না।",
        "options": [
            { "name": "FROM NUMBER", "price": "150 টাকা" },
            { "name": "NID NUMBER", "price": "150 টাকা" },
            { "name": "VOTER NUMBER", "price": "155 টাকা" }
        ]
    },
    {
        "id": 7,
        "title": "SIM CALL LIST",
        "description": "এইটার মাধ্যমে যে কোন নাম্বারের লাস্ট ৩ মাসের কল লিস্ট লোকেশন বাহির করা হয়। অর্থাৎ ৩ মাসে যত নাম্বারে কথা বলছে সে সকল নাম্বার & ঠিকানা এবং ঐ ফোনের IMEI নাম্বার পাবেন।",
        "options": [
            { "name": "ANY SIM", "price": "2100 টাকা" }
        ]
    },
    {
        "id": 8,
        "title": "BLOCK BIKASH ACCOUNT",
        "description": "এটার মাধ্যম যে কারো বিকাশ নাম্বার লক করে দিতে পারবেন। অর্থাৎ যে বিকাশ লক করে দিবেন সেটা দিয়ে সে আর লেনদেন করতে পারবে না, বিকাশে টাকা থাকলে সেটাও তুলতে পারবে না।",
        "options": [
            { "name": "PERSONAL BKASH", "price": "1100 টাকা" }
        ]
    },

    {
        "id": 9,
        "title": " IMEI to Active number ",
        "description": " এইটার মাধ্যমে আপনি আপনি যেকোনো ফোনের IMEI নাম্বার দিয়ে সেই ডিভাইসে ব্যবহার করা সিমের নাম্বার সহ নাম্বার কার ইনআইডি দিয়ে রেজিষ্ট্রেশন করা এবং লাইভ লোকেশন দেখতে পারবেন। অর্থাৎ আপনার ফোন হারিয়ে গেলে বা চুরি হয়ে গেলে বের করে নিতে পারবেন। ",
        "options": [
            { "name": "IMEI TO NUMBER ", "price": "1600 টাকা" }
        ]
    }
    
];



// end service card 







// DOM Elements
const servicesContainer = document.getElementById('servicesContainer');
const serviceModal = document.getElementById('serviceModal');
const closeServiceModal = document.getElementById('closeServiceModal');
const serviceModalTitle = document.getElementById('serviceModalTitle');
const serviceModalText = document.getElementById('serviceModalText');
const whatsappServiceBtn = document.getElementById('whatsappServiceBtn');
const telegramServiceBtn = document.getElementById('telegramServiceBtn');
const emailServiceBtn = document.getElementById('emailServiceBtn');

// Load Services
function loadServices() {
    servicesContainer.innerHTML = '';
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div class="service-options" id="options-${service.id}">
                <ul>
                    ${service.options.map(option => `
                        <li onclick="showServiceModal('${service.title}', '${option.name} - ${option.price}')">
                            <span>${option.name}</span>
                            <span>${option.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        serviceCard.addEventListener('click', (e) => {
            // Don't toggle if clicking on an option
            if (e.target.tagName === 'LI' || e.target.tagName === 'SPAN') return;
            
            const options = document.getElementById(`options-${service.id}`);
            options.classList.toggle('active');
            
            // Close other open options
            document.querySelectorAll('.service-options').forEach(opt => {
                if (opt.id !== `options-${service.id}`) {
                    opt.classList.remove('active');
                }
            });
        });
        
        servicesContainer.appendChild(serviceCard);
    });
}

// Show Service Modal
function showServiceModal(serviceName, optionText) {
    serviceModalTitle.textContent = serviceName;
    serviceModalText.textContent = `${optionText} - এই সার্ভিসটি নিতে সরাসরি আমাদের সাথে নিচের মাধ্যমগুলোতে যোগাযোগ করুন।`;
    serviceModal.style.display = 'flex';
    
    // Close all service options
    document.querySelectorAll('.service-options').forEach(opt => {
        opt.classList.remove('active');
    });
}

// Event Listeners
closeServiceModal.addEventListener('click', () => {
    serviceModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
        serviceModal.style.display = 'none';
    }
});

// Contact Button Actions (replace with your actual links)
whatsappServiceBtn.addEventListener('click', () => {
    window.open('https://wa.me/off your number ', '_blank');
});

telegramServiceBtn.addEventListener('click', () => {
    window.open('https://t.me/Elite_Services_APP', '_blank');
});

emailServiceBtn.addEventListener('click', () => {
    window.location.href = 'mailto:elite.software@eay.jp';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    
    // Add animation to service cards on load
    setTimeout(() => {
        const cards = document.querySelectorAll('.service-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 150 * index);
        });
    }, 300);
});
