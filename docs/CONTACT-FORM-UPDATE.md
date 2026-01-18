# Contact Form Update - Quick Reference

## Form Changes Summary

### Form Title Changed
- **Old**: "Send us a message"
- **New**: "Submit Your Query"

### New Fields Added

#### 1. Select Location (Required Dropdown)
**Options:** Durgapura, Gopalpura, Jagatpura, Malviya Nagar, Pratap Nagar, Sanganer

These are areas in Jaipur, Rajasthan.

#### 2. Property Type (Required Dropdown)
**Options:** Single Room, Flat, Apartment, House

#### 3. Number of Members (Required Number)
**Range:** 1-20 people
**Description:** How many people will be living in the property

#### 4. Budget (Required Number)
**Format:** Indian Rupees per month
**Min:** 0, **Step:** 1000
**Description:** Monthly rental budget

### Fields Retained
- Name (text)
- Email (email)
- Phone (tel)
- Additional Requirements (textarea) - formerly "Requirements"

### Form Layout
```
┌─────────────────────────────────────────────┐
│          Submit Your Query                  │
├─────────────────────┬───────────────────────┤
│ Name *              │ Phone *               │
├─────────────────────┴───────────────────────┤
│ Email *                                     │
├─────────────────────┬───────────────────────┤
│ Select Location *   │ Property Type *       │
├─────────────────────┼───────────────────────┤
│ Number of Members * │ Budget (₹/month) *    │
├─────────────────────┴───────────────────────┤
│ Additional Requirements                     │
│ (textarea)                                  │
├─────────────────────────────────────────────┤
│         [Submit Query Button]               │
└─────────────────────────────────────────────┘
```

## Google Sheets Update Required

### New Column Headers
Update your "ROR-STAY Contact Submissions" Google Sheet with these headers:

```
Name | Email | Phone | Location | Property Type | Number of Members | Budget | Requirements | Timestamp
```

### Sample Data Row
```
Rajesh Kumar | rajesh@email.com | +91 9876543210 | Jagatpura | Flat | 2 | 15000 | Need parking and WiFi | 2026-01-18T06:35:00Z
```

## n8n Workflow Update

Update your Contact Form workflow's Google Sheets node with these column mappings:

```
Name: {{ $json.name }}
Email: {{ $json.email }}
Phone: {{ $json.phone }}
Location: {{ $json.location }}
Property Type: {{ $json.propertyType }}
Number of Members: {{ $json.members }}
Budget: {{ $json.budget }}
Requirements: {{ $json.requirements }}
Timestamp: {{ $json.timestamp }}
```

## Files Modified

1. ✅ [public/index.html](file:///home/azureuser/ROR-STAY-N8N-LITE/public/index.html) - Updated form HTML
2. ✅ [js/contact.js](file:///home/azureuser/ROR-STAY-N8N-LITE/js/contact.js) - Updated JavaScript data collection
3. ✅ [docs/N8N-WORKFLOWS.md](file:///home/azureuser/ROR-STAY-N8N-LITE/docs/N8N-WORKFLOWS.md) - Updated workflow documentation

## Testing

Run local server:
```bash
cd /home/azureuser/ROR-STAY-N8N-LITE/public
python3 -m http.server 8000
```

Open: http://localhost:8000

Navigate to "Get In Touch" section and verify the new form appears correctly with all fields.
