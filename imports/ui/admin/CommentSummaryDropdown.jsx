import React, {Component, PropTypes} from 'react';
import {Button, Collapse, Well} from 'react-bootstrap';
import _ from 'lodash';


export default class CommentSummaryDropdown extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open: true
        };
    }

    renderComments (comments) {
        const shuffledComments = _.shuffle(comments);

        return shuffledComments.map((comment) => {
            return <p>{comment}</p>
        });
    }

    render() {
        return (
            <div>
                <Button
                    style={{'border-radius': '0px'}}
                    onClick={ ()=> this.setState({ open: !this.state.open })}
                >
                    {this.props.title}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well style={{'border-radius': '0px'}}>
                            {this.renderComments(this.props.comments)}
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}
CommentSummaryDropdown.propTypes = {
    title: React.PropTypes.string
};

CommentSummaryDropdown.defaultProps = {
    title: 'Click Me'
};