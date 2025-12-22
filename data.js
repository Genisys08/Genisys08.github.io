/* ========================================================
   CONTROL PANEL - EDIT YOUR WEBSITE HERE
   ======================================================== */

const siteData = {
    // 1. YOUR DETAILS
    authorName: "John Osaze",
    role: "Speculative Fiction Author",
    
    // 2. YOUR LINKS
    amazonProfile: "https://www.amazon.com/author/johnosaze", 
    whatsappChannel: "https://whatsapp.com/channel/0029VbBpLjUInlqUlabqbp2E", 

    // 3. THE BIG FEATURED BOOK (Top of the page)
    featuredBook: {
        title: "Shadow Steel",
        status: "COMING SOON", 
        coverImage: "shadow.jpg", // Make sure this file is in your folder
        description: "<strong>Fused with the void. Bound by steel.</strong><br><br>After an industrial accident fuses a weary Pittsburgh mechanic with a parasitic alien artifact, he must master his terrifying new gravity powers to stop a fanatical zealot from triggering a global evolutionary purge.",
        
        // Button 1
        button1_Text: "Join Waitlist",
        button1_Link: "https://whatsapp.com/channel/0029VbBpLjUInlqUlabqbp2E", 
        
        // Button 2 (Empty link = Unclickable)
        button2_Text: "Read Preview", 
        button2_Link: "" 
    },

    // 4. FUTURE BOOKS
    futureBooks: [
        {
            title: "Veil of the Dead",
            status: "DRAFTING",
            summary: "The dead do not sleep. A relentless survival horror exploring the cost of staying human.",
            cover: "", // EMPTY = Shows Mystery Box
            link: ""   // EMPTY = Unclickable Button
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
            summary: "The rust begins.",
            cover: "", // Resetting this as requested
            link: ""   // Resetting this as requested
        }
    ]
};
