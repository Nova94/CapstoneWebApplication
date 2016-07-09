/*import { Mongo } from 'meteor/mongo';

export const Reviews = new Mongo.Collection('reviews');

let ratings = ["Poor", "Below Average", "Average", "Above Average", "Excellent", "Unknown or N/A"];

Reviews.attachSchema(SimpleSchema({
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
        label: "Type",
        allowedValues: ["midterm", "final"]
    },
    "fields.$.technical": {
        type: String,
        label: "Technical Skill",
        allowedValues: ratings
    },
    "fields.$.workEthic": {
        type: String,
        label: "Work Ethic",
        allowedValues: ratings
    },
    "fields.$.communication": {
        type: String,
        label: "Communication",
        allowedValues: ratings
    },
    "fields.$.initiative": {
        type: String,
        label: "Initiative",
        allowedValues: ratings
    },
    "fields.$.teamFocus": {
        type: String,
        label: "Team Focus",
        allowedValues: ratings
    },
    "fields.$.contribution": {
        type: String,
        label: "Contribution",
        allowedValues: ratings
    },
    "fields.$.teamLead.leadership": {
        type: String,
        label: "Leadership",
        allowedValues: ratings,
        optional: true
    },
    "fields.$.teamLead.organization": {
        type: String,
        label: "Organization",
        allowedValues: ratings,
        optional: true
    },
    "fields.$.teamLead.delegation": {
        type: String,
        label: "Delegation",
        allowedValues: ratings,
        optional: true
    },
    "points": {
        type: Number,
        label: "Point Allocation",
        min: 0,
        max: 100
    },
    "strengths": {
        type: String,
        label: "Strengths"
    },
    "weakness": {
        type: String,
        label: "Weakness"
    },
    "traitSuggestion": {
        type: String,
        label: "Traits"
    }
}));*/