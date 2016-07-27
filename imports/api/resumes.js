import { Mongo } from 'meteor/mongo';

export const Resumes = new Mongo.Collection('resumes');

let Degree = new SimpleSchema({
    "school": {
        type: String,
        label: "School Name"
    },
    "city": {
        type: String,
        label: "City"
    },
    "state": {
        type: String,
        label: "State"
    },
    "degreeType": {
        type: String,
        label: "Degree Type",
        allowedValues: [
            "Associate of Arts",
            "Associate of Science",
            "Associate of Applied Science",
            "Associate of Engineering",
            "Associate of Applied Arts",
            "Associate of Political Science",
            "Bachelor of Arts",
            "Bachelor of Science",
            "Bachelor of Fine Arts",
            "Bachelor of Business Administration",
            "Bachelor of Architecture",
            "Master of Arts",
            "Master of Fine Arts",
            "Master of Science",
            "Master of Research",
            "Master of Philosophy",
            "Master of Laws",
            "Master of Business Administration",
            "Doctor of Philosophy",
            "Doctor of Medicine",
            "Doctor of Education",
            "Juris Doctor"]
    },
    "degreeName": {
        type: String,
        label: "Degree Name"
    },
    /* TODO: on form, if obtained == true show graduated field else expected */
    "obtained": {
        type: Boolean,
        label: "Obtained"
    },
    "graduated": {
        type: Date,
        label: "Graduated",
        optional: true
    },
    "expected": {
        type: Date,
        label: "Expected Graduation",
        optional: true
    }
});

let Course = new SimpleSchema({
    "className": {
        type: String,
        label: "Class Name"
    },
    "classNumber": {
        type: String,
        label: "Class Number"
    }
});

let Project = new SimpleSchema({
    "projectName": {
        type: String,
        label: "Project Name"
    },

    "description": {
        type: String,
        label: "Description",
        max: 300
    },
    "tools.$.technology": {
        type: String,
        label: "Technology/Tool",
        optional: true
    },
    "result": {
        type: String,
        label: "Result/Place",
        optional: true,
    }
});

let WorkExperience = new SimpleSchema({
    "companyName": {
        type: String,
        label: "Company Name"
    },
    "city": {
        type: String,
        label: "City"
    },
    "state": {
        type: String,
        label: "State"
    },
    "position": {
        type: String,
        label: "Position Title"
    },
    "startDate": {
        type: Date,
        label: "Start Date"
    },
    "endDate": {
        type: Date,
        label: "End Date"
    },
    "tasks.$.task": {
        type: String,
        label: "Task/Responsibility",
        max: 200
    }
});

Resumes.attachSchema(new SimpleSchema({
    "name": {
        type: String,
        label: "Name"
    },
    "cellphone": {
        type: String,
        label: "Phone Number"
    },
    "email": {
        type: String,
        label: "PDX Email"
    },
    // "skills": {
    //     label: "Software Engineering Knowledge and Skills"
    // },
    "skills.$.skill": {
        type: String,
        label: "Skill/Knowledge"
    },
    "degrees.$.degree": {
        type: Degree,
        label: "Degree"
    },
    "projects.$.project":
    {
        type: Project,
        label: "Project"
    },
    "courses.$.course": {
        type: Course,
        label: "Course"
    },
    "workExperience.$.position": {
        type: WorkExperience,
        label: "Position"
    },
    "technologySummary": {
        type: String,
        label: "Technology Summary",
        max:2000
    },
    "otherInformation": {
        type: String,
        label: "Other Information",
        max:2000
    }

}));