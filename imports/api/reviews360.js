Reviews360 = new Mongo.Collection('reviews360');

let ratings = ["Poor", "Below Average", "Average", "Above Average", "Excellent", "Unknown or N/A"];

Reviews360.attachSchema(new SimpleSchema({
    "reviewer": {
        type: String,
        label: "Reviewer"
    },
    "reviewee": {
        type: String,
        label: "Reviewee"
    },
    "reviewType": {
        type: String,
        label: "Type of Review",
        allowedValues: ["Midterm", "Final"]
    },
    "technical": {
        type: String,
        label: "Technical Skill",
        allowedValues: ratings,
        autoform: {
            type: "select-radio-inline",
            options:{
                Poor: "Poor",
                'Below Average': "Below Average",
                Average: "Average",
                'Above Average': "Above Average",
                Excellent: "Excellent",
                'Unknown or N/A': "Unknown or N/A"
            }
        }
    },
    "workEthic": {
        type: String,
        label: "Work Ethic",
        allowedValues: ratings,
        autoform: {
            type: "select-radio-inline",
            options:{
                Poor: "Poor",
                'Below Average': "Below Average",
                Average: "Average",
                'Above Average': "Above Average",
                Excellent: "Excellent",
                'Unknown or N/A': "Unknown or N/A"
            }
        }
    },
    "communication": {
        type: String,
        label: "Communication",
        allowedValues: ratings,
        autoform: {
            type: "select-radio-inline",
            options:{
                Poor: "Poor",
                'Below Average': "Below Average",
                Average: "Average",
                'Above Average': "Above Average",
                Excellent: "Excellent",
                'Unknown or N/A': "Unknown or N/A"
            }
        }
    },
    "initiative": {
        type: String,
        label: "Initiative",
        allowedValues: ratings,
        autoform: {
            type: "select-radio-inline",
            options:{
                Poor: "Poor",
                'Below Average': "Below Average",
                Average: "Average",
                'Above Average': "Above Average",
                Excellent: "Excellent",
                'Unknown or N/A': "Unknown or N/A"
            }
        }
    },
    "teamFocus": {
        type: String,
        label: "Team Focus",
        allowedValues: ratings,
        autoform: {
            type: "select-radio-inline",
            options:{
                Poor: "Poor",
                'Below Average': "Below Average",
                Average: "Average",
                'Above Average': "Above Average",
                Excellent: "Excellent",
                'Unknown or N/A': "Unknown or N/A"
            }
        }
    },
    "contribution": {
        type: String,
        label: "Contribution",
        allowedValues: ratings,
        autoform: {
            type: "select-radio-inline",
            options:{
                Poor: "Poor",
                'Below Average': "Below Average",
                Average: "Average",
                'Above Average': "Above Average",
                Excellent: "Excellent",
                'Unknown or N/A': "Unknown or N/A"
            }
        }
    },
    "teamLead.leadership": {
        type: String,
        label: "Leadership",
        allowedValues: ratings,
        optional: true,
        autoform: {
            type: "select-radio-inline",
            options:{
                Poor: "Poor",
                'Below Average': "Below Average",
                Average: "Average",
                'Above Average': "Above Average",
                Excellent: "Excellent",
                'Unknown or N/A': "Unknown or N/A"
            }
        }
    },
    "teamLead.organization": {
        type: String,
        label: "Organization",
        allowedValues: ratings,
        optional: true,
        autoform: {
            type: "select-radio-inline",
            options:{
                Poor: "Poor",
                'Below Average': "Below Average",
                Average: "Average",
                'Above Average': "Above Average",
                Excellent: "Excellent",
                'Unknown or N/A': "Unknown or N/A"
            }
        }
    },
    "teamLead.delegation": {
        type: String,
        label: "Delegation",
        allowedValues: ratings,
        optional: true,
        autoform: {
            type: "select-radio-inline",
            options:{
                Poor: "Poor",
                'Below Average': "Below Average",
                Average: "Average",
                'Above Average': "Above Average",
                Excellent: "Excellent",
                'Unknown or N/A': "Unknown or N/A"
            }
        }
    },
    "points": {
        type: Number,
        label: "Point Allocation",
        min: 0,
        max: 100
    },
    "strengths": {
        type: String,
        label: "Strengths",
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    },
    "weakness": {
        type: String,
        label: "Weakness",
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    },
    "traitSuggestion": {
        type: String,
        label: "Traits",
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    }
}));

export default Reviews360;