import { Mongo } from 'meteor/mongo';

export const Reviews = new Mongo.Collection('reviews');

let ratings = ["Poor", "Below Average", "Average", "Above Average", "Excellent", "Unknown or N/A"];

Reviews.attachSchema(new SimpleSchema({
    "reviewer": {
        type: String,
        label: "Reviewer"
    },
    "reviewee": {
        type: String,
        label: "Reviewee"
    },
    "revieweeName": {
        type: String,
        label: "Reviewee Name"
    },
    "reviewType": {
        type: String,
        label: "Type of Review",
        allowedValues: ["midterm", "final"],
        autoform: {
            options: [
                {label: "Midterm", value: "midterm"},
                {label: "Final", value: "final"}
            ]
        }
    },
    "fields.technical": {
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
            },
            value: "Unknown or N/A"
        }
    },
    "fields.workEthic": {
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
            },
            value: "Unknown or N/A"
        }
    },
    "fields.communication": {
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
            },
            value: "Unknown or N/A"
        }
    },
    "fields.initiative": {
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
            },
            value: "Unknown or N/A"
        }
    },
    "fields.teamFocus": {
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
            },
            value: "Unknown or N/A"
        }
    },
    "fields.contribution": {
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
            },
            value: "Unknown or N/A"
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
            },
            value: "Unknown or N/A"
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
            },
            value: "Unknown or N/A"
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
            },
            value: "Unknown or N/A"
        }
    },
    "points": {
        type: Number,
        label: `*Point Allocation - You have 100 total points to assign across all your teammates. Out of the available
100 points, how many points would you assign to this team mate (do not give
yourself any points)? Remember, the sum of all the points you assign to everyone in
your team except yourself should be 100.`,
        min: 0,
        max: 100
    },
    "strengths": {
        type: String,
        label: "*Strengths",
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    },
    "weakness": {
        type: String,
        label: "*Weaknesses",
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    },
    "traitSuggestion": {
        type: String,
        label: "*Suggestions",
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    }
}));
