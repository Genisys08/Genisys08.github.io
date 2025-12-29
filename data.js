
/* ========================================================
   CONTROL PANEL - JOHN OSAZE STUDIO
   ======================================================== */

const siteData = {
    // 1. YOUR IDENTITY
    authorName: "JOHN OSAZE",
    role: "Architect of Worlds | Speculative Fiction Author",
    
    // 2. THE SERVICE (FIVERR GIG) - *NEW SECTION*
    ghostwriting: {
        isActive: true, // Set to false to hide this section temporarily
        title: "HIRE THE ARCHITECT",
        headline: "STOP SETTLING FOR AI GENERATED NOISE.",
        description: "I bring engineering precision to narrative chaos. Whether it is Sci-Fi, Gritty Noir, or High-Stakes Thriller, I build stories that bleed, breathe, and break the mold.",
        priceStart: "$40",
        // The Link to your Fiverr
        link: "http://www.fiverr.com/s/BRZ48zW" 
    },

    // 3. SOCIAL MEDIA LINKS (Leave empty "" to hide)
    socialLinks: {
        whatsapp: "https://wa.me/2349135489891", 
        facebook: "", 
        instagram: "", 
        tiktok: "https://www.tiktok.com/@johnosaze08?_r=1&_t=ZS-92WOYQhbNrQ", 
        twitter: "", 
        linkedin: "", 
        amazon: "https://www.amazon.com/dp/B0GBYTDXFP",
        fiverr: "http://www.fiverr.com/s/BRZ48zW" // Added Icon for Fiverr
    },

    // 4. THE FLAGSHIP BOOK
    featuredBook: {
        title: "SHADOW STEEL",
        status: "NOW AVAILABLE",
        coverImage: "shadow.jpg", // Ensure this file exists in your folder
        description: "<strong>Fused with the void. Bound by steel.</strong><br><br>After an industrial accident fuses a weary Pittsburgh mechanic with a parasitic alien artifact, he must master his terrifying new gravity powers to stop a fanatical zealot from triggering a global evolutionary purge.",
        
        // Primary Action
        button1_Text: "READ ON AMAZON",
        button1_Link: "https://www.amazon.com/dp/B0GBYTDXFP", 
        
        // Secondary Action
        button2_Text: "JOIN THE LEGION", 
        button2_Link: "https://whatsapp.com/channel/0029VbBpLjUInlqUlabqbp2E" 
    },

    // 5. THE UNIVERSE (Add as many as you want)
    futureBooks: [
        {
            title: "VEIL OF THE DEAD",
            status: "IN PRODUCTION",
            summary: "The dead do not sleep. A relentless survival horror exploring the cost of staying human in a world that has forgotten how.",
            cover: "", 
            link: ""
        },
        {
            title: "SPECIAL FORCE",
            status: "CLASSIFIED",
            summary: "Tactical warfare in a universe that wants you dead. Military sci-fi meets cosmic horror.",
            cover: "", 
            link: "" 
        },
        {
            title: "IRON DUST",
            status: "CONCEPT",
            summary: "In a world choked by metallic storms, humanity is fading. Survival isn't just about living—it's about not rusting away.",
            cover: "", 
            link: ""
        }
    ]
};
