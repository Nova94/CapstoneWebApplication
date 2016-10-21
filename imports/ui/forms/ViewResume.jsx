import React, {Component, PropTypes} from 'react';
import {Table, Panel} from 'react-bootstrap';
import moment from 'moment';

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
                            <td>{moment(position.startDate).format('LL')}</td>
                        </tr>
                        <tr>
                            <th>End Date:</th>
                            <td>{moment(position.endDate).format('LL')}</td>
                        </tr>
                        <tr>
                            <th>City:</th>
                            <td>{position.city}</td>
                        </tr>
                        <tr>
                            <th>State:</th>
                            <td>{position.state}</td>
                        </tr>
                        {getTasks(position.tasks)}
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

    getPanelTable(title, tableRowFunction) {
        return (simpleArray) => {
            return (<Panel defaultExpanded header={title}>
                <Table fill striped condensed hover>
                    <tbody>
                    {tableRowFunction(simpleArray)}
                    </tbody>
                </Table>
            </Panel>)
        }
    }


    getPanel(title, tableFunction) {
        return (objectArray) => {
            return (
                <Panel defaultExpanded header={title}>
                    {tableFunction(objectArray)}
                </Panel>
            )
        }
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
                        {getDegreeDate(degree)}
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
                        {getTechnologies(project.tools)}
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

    getCourses(courses) {
        if (courses) {

            rows = [];

            courses.map((c) => {
                const course = c.course;

                rows.push(<tr>
                    <th>{course.classNumber}</th>
                    <td>{course.className}</td>
                </tr>)
            });
            return rows;

        }
    }

    getFooterPanel(resume) {
        return (<Panel defaultExpanded header="Summary">
            <Table fill striped condensed hover>
                <tbody>
                <tr>
                    <th>Technology Summary:</th>
                    <td>{resume.technologySummary}</td>
                </tr>
                </tbody>
            </Table>
        </Panel>)
    }

    render() {
        const resume = this.props.user.resume;
        let skillsPanel = this.getPanelTable("Skills", this.getSkills);
        let degreesPanel = this.getPanel("Degrees", this.getDegrees);
        let projectsPanel = this.getPanel("Projects", this.getProjects);
        let coursesPanel = this.getPanelTable("Courses", this.getCourses);
        let workExperiencePanel = this.getPanel("Work Experience", this.getWorkExperience);


        if (!this.props.user.resume.name) {
            return <div>Error: No review found to view.</div>
        }

        return (
            <div>
                {this.getHeaderPanel(resume)}
                {skillsPanel(resume.skills)}
                {degreesPanel(resume.degrees)}
                {projectsPanel(resume.projects)}
                {coursesPanel(resume.courses)}
                {workExperiencePanel(resume.workExperience)}
                {this.getFooterPanel(resume)}
            </div>
        );
    }
}

function getTasks(tasks) {
    if (tasks) {
        rows = [];
        rows.push(<th>Tasks</th>);
        tasks.map((task) => {
            rows.push(<tr>{task.task}</tr>)
        });
        return rows;
    }
}

function getTechnologies(technologies) {
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

function getDegreeDate(degree) {
    if (degree.obtained) {
        return (
            <tr>
                <th>Graduated:</th>
                <td>{moment(degree.graduated).format('LL')}</td>
            </tr>);
    }
    return (
        <tr>
            <th>Expected:</th>
            <td>{moment(degree.expected).format('LL')}</td>
        </tr>);
}