/**
 * n8n Webhook Configuration
 * 
 * Update these URLs with your actual n8n webhook endpoints
 */

const N8N_CONFIG = {
    // Base URL for your n8n instance
    baseURL: 'http://localhost:5678',

    // Webhook endpoints
    webhooks: {
        // Contact form submission
        contactSubmit: 'http://localhost:5678/webhook/contact-submit',

        // Get all property listings
        getListings: 'http://localhost:5678/webhook/get-listings',

        // Add new property listing (with images)
        addListing: 'http://localhost:5678/webhook/add-listing',

        // Upload image to Google Drive
        uploadImage: 'http://localhost:5678/webhook/upload-image',
    },

    // Configuration
    timeout: 30000, // 30 seconds for image uploads
};

// Export for ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = N8N_CONFIG;
}
