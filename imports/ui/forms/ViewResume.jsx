import React, {Component, PropTypes} from 'react';
import {Table, Panel} from 'react-bootstrap';

export default class ViewResume extends Component {
    constructor(props) {
        super(props);
    }


    getHeaderPanel(resume) {
        return (<Panel defaultExpanded header="Resume" bsStyle="success">
            <Table fill striped condensed hover>
                <tbody>
                <tr>
                    <th>Name:</th>
                    <td>{resume.name}</td>
                </tr>
                <tr>
                    <th>Cell Phone:</th>
                    <td>{resume.cellphone}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>{resume.email}</td>
                </tr>
                </tbody>
            </Table>
        </Panel>)
    }

    getTasks(tasks) {
        if(tasks) {
            rows = [];
            rows.push(<th>Tasks</th>);
            tasks.map((task) => {
                rows.push(<tr>{task.task}</tr>)
            });
            return rows;
        }
    }

    getWorkExperience(workExperience) {
        if (workExperience) {

            tables = [];

            workExperience.map((experience) => {
                const position = experience.position;
                tables.push(
                    <Table fill striped condensed hover>
                        <thead><h4>{position.companyName}</h4></thead>
                        <tbody>
                        <tr>
                            <th>Position:</th>
                            <td>{position.position}</td>
                        </tr>
                        <tr>
                            <th>Start Date:</th>
                            <td>{position.startDate}</td>
                        </tr>
                        <tr>
                            <th>End Date:</th>
                            <td>{position.endDate}</td>
                        </tr>
                        <tr>
                            <th>City:</th>
                            <td>{position.city}</td>
                        </tr>
                        <tr>
                            <th>State:</th>
                            <td>{position.state}</td>
                        </tr>
                        {this.getTasks(position.tasks)}
                        </tbody>
                    </Table>
                );
            });

            return (
                <div>
                    {tables}
                </div>
            );
        }
    }

    getSkills(skills) {
        if (skills) {

            rows = [];

            skills.map((skill) => {
                rows.push(<tr>
                    <td>{skill.skill}</td>
                </tr>)
            });
            return rows;
        }
    }

    getSkillsPanel(resume) {
        return (<Panel defaultExpanded header="Skills:">
            <Table fill striped condensed hover>
                <tbody>
                {this.getSkills(resume.skills)}
                </tbody>
            </Table>
        </Panel>)
    }

    getWorkExperiencePanel(resume) {
        return (
            <Panel defaultExpanded header="Work Experience:">
                {this.getWorkExperience(resume.workExperience)}
            </Panel>
        )
    }

    getDegreeDate(degree) {
        if(degree.obtained) {
            return (
                <tr>
                    <th>Graduated:</th>
                    <td>{degree.graduated}</td>
                </tr>);
        }
        return (
            <tr>
                <th>Expected:</th>
                <td>{degree.expected}</td>
            </tr>);
    }

    getDegrees(degrees) {
        if (degrees) {

            tables = [];

            degrees.map((d) => {
                const degree = d.degree;
                tables.push(
                    <Table fill striped condensed hover>
                        <thead><h4>{degree.degreeName + ", " + degree.degreeType}</h4></thead>
                        <tbody>
                        <tr>
                            <th>School</th>
                            <td>{degree.school}</td>
                        </tr>
                        <tr>
                            <th>City:</th>
                            <td>{degree.city}</td>
                        </tr>
                        <tr>
                            <th>State:</th>
                            <td>{degree.state}</td>
                        </tr>
                        {this.getDegreeDate(degree)}
                        </tbody>
                    </Table>
                );
            });

            return (
                <div>
                    {tables}
                </div>
            );
        }
    }

    getDegreesPanel(resume) {
        return (
            <Panel defaultExpanded header="Degrees:">
                {this.getDegrees(resume.degrees)}
            </Panel>
        );
    }
    
    getTechnologies(technologies) {
        if (technologies) {

            rows = [];
            rows.push(<th>Technologies:</th>);
            technologies.map((technology) => {
                rows.push(<tr>
                    <th></th>
                    <td>{technology.technology}</td>
                </tr>)
            });
            return rows;
        }
    }
    
    getProjects(projects) {
        if (projects) {

            tables = [];

            projects.map((p) => {
                const project = p.project;
                tables.push(
                    <Table fill striped condensed hover>
                        <thead><h4>{project.projectName}</h4></thead>
                        <tbody>
                        <tr>
                            <th>Description:</th>
                            <td>{project.description}</td>
                        </tr>
                        <tr>
                            <th>Result</th>
                            <td>{project.result}</td>
                        </tr>
                        {this.getTechnologies(project.tools)}
                        </tbody>
                    </Table>
                );
            });

            return (
                <div>
                    {tables}
                </div>
            );
        }
    }
    
    getProjectsPanel(resume) {
        return (
            <Panel defaultExpanded header="Projects">
                {this.getProjects(resume.projects)}
            </Panel>
        );
    }

    getCourses(courses) {
        if(courses) {

            rows = [];

            courses.map((c) => {
                console.log(c)
                const course = c.course;

                console.log(course)
                rows.push(<tr>
                    <th>{course.classNumber}</th>
                    <td>{course.className}</td>
                </tr>)
            });
            return rows;

        }
    }
    getCoursesPanel(resume) {
        return (<Panel defaultExpanded header="Courses:">
            <Table fill striped condensed hover>
                <tbody>
                {this.getCourses(resume.courses)}
                </tbody>
            </Table>
        </Panel>)
    }

    getFooterPanel(resume) {
        return (<Panel defaultExpanded header="Work Experience:">
        <Table fill striped condensed hover>
            <tbody>
            <tr>
                <th>Technology Summary:</th>
                <td>{resume.technologySummary}</td>
            </tr>

            <tr>
                <th>Other Information:</th>
                <td>{resume.otherInformation}</td>
            </tr>
            </tbody>
        </Table>
    </Panel>)
    }

    render() {
        const resume = this.props.user.resume;

        if (!this.props.user.resume.name) {
            return <div>Error: No review found to view.</div>
        }

        return (
            <div>
                {this.getHeaderPanel(resume)}
                {this.getSkillsPanel(resume)}
                {this.getDegreesPanel(resume)}
                {this.getProjectsPanel(resume)}
                {this.getCoursesPanel(resume)}
                {this.getWorkExperiencePanel(resume)}
                {this.getFooterPanel(resume)}
            </div>
        );
    }
}
