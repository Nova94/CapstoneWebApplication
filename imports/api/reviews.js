import { Mongo } from 'meteor/mongo';

export const Reviews = new Mongo.Collection('reviews');

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
        type: Number,
        label: "Technical"
    },
    "fields.$.workEthic": {
        type: Number,
        label: "Work Ethic"
    },
    "fields.$.communication": {
        type: Number,
        label: "Communication"
    },
    "fields.$.initiative": {
        type: Number,
        label: "Initiative"
    },
    "fields.$.teamFocus": {
        type: Number,
        label: "Team Focus"
    },
    "fields.$.contribution": {
        type: Number,
        label: "Contribution"
    },
    "fields.$.teamLead.leadership": {
        type: Number,
        label: "Leadership",
        optional: true
    },
    "fields.$.teamLead.organization": {
        type: Number,
        label: "Organization",
        optional: true
    },
    "fields.$.teamLead.delegation": {
        type: Number,
        label: "Delegation",
        optional: true
    },
    "points": {
        type: Number,
        label: "Total Points",
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
}));