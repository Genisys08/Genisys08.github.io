
/* ========================================================
   CONTROL PANEL - EDIT YOUR WEBSITE HERE
   ======================================================== */

const siteData = {
    // 1. YOUR DETAILS
    authorName: "John Osaze",
    role: "Speculative Fiction Author",
    
    // 2. SOCIAL MEDIA LINKS (Empty "" = Hides the Button)
    socialLinks: {
        whatsapp: "https://wa.me/2349135489891", // Your Number Added
        facebook: "", // Placeholder
        instagram: "", // Placeholder
        tiktok: "", // Placeholder
        twitter: "", // Placeholder (X)
        linkedin: "", // Placeholder
        amazon: "https://www.amazon.com/dp/B0GBYTDXFP" // Your New Book Link
    },

    // 3. THE BIG FEATURED BOOK
    featuredBook: {
        title: "Shadow Steel",
        status: "NOW AVAILABLE", // Updated Status
        coverImage: "shadow.jpg", 
        description: "<strong>Fused with the void. Bound by steel.</strong><br><br>After an industrial accident fuses a weary Pittsburgh mechanic with a parasitic alien artifact, he must master his terrifying new gravity powers to stop a fanatical zealot from triggering a global evolutionary purge.",
        
        // Button 1 (Main Action)
        button1_Text: "Read on Amazon",
        button1_Link: "https://www.amazon.com/dp/B0GBYTDXFP", 
        
        // Button 2 (Secondary Action)
        button2_Text: "Join Channel", 
        button2_Link: "https://whatsapp.com/channel/0029VbBpLjUInlqUlabqbp2E" 
    },

    // 4. FUTURE BOOKS
    futureBooks: [
        {
            title: "Veil of the Dead",
            status: "DRAFTING",
            summary: "The dead do not sleep. A relentless survival horror exploring the cost of staying human.",
            cover: "", 
            link: ""
        },
        {
            title: "Special Force",
            status: "PLANNING",
            summary: "Tactical warfare in a universe that wants you dead. Military sci-fi meets cosmic horror.",
            cover: "", 
            link: "" 
        },
        {
            title: "Iron Dust",
            status: "CONCEPT",
            summary: "In a world choked by metallic storms, humanity is fading. Survival isn't just about living—it's about not rusting away.",
            cover: "", 
            link: ""
        }
    ]
};
