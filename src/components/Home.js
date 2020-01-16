import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Container, Divider, Tab, Segment } from 'semantic-ui-react';
import LatestTab from './LatestTab';
import { fetchAPIDetails } from '../actions/HomeAction';

class Home extends Component {
    state = {}

    componentDidMount() {
        this.props.fetchAPIDetails();
    }

    render() {
        console.log(this.props.data);
        /*const style = {
            h1: {
                marginTop: '3em',
            },
            h2: {
                margin: '4em 0em 2em',
            },
            h3: {
                marginTop: '2em',
                padding: '2em 0em',
            },
            last: {
                marginBottom: '300px',
            },
        }*/
        const panes = [
            { menuItem: 'Latest', render: () => <Tab.Pane attached={false}><LatestTab /></Tab.Pane> },
            { menuItem: 'Search', render: () => <Tab.Pane>Search Content</Tab.Pane> },
            { menuItem: 'Create Recordset', render: () => <Tab.Pane>Recordset Content</Tab.Pane> },
            { menuItem: 'Create Pipeline', render: () => <Tab.Pane>Pipeline Content</Tab.Pane> },
            { menuItem: 'Run Experiment', render: () => <Tab.Pane>Experiment Content</Tab.Pane> },
            { menuItem: 'Run Pipeline', render: () => <Tab.Pane>Run Pipeline Content</Tab.Pane> },
            { menuItem: 'Run Model', render: () => <Tab.Pane>Run Model Content</Tab.Pane> },
        ];
        return (
            <div>
                <Container style={{ padding: '5em 0em' }}>
                    <Segment>
                        <Header as='h4' attached='top' block textAlign='center'>
                            Landing/Home Page
                        </Header>
                        <Divider hidden />
                        <Tab panes={panes} />
                    </Segment>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.HomeReducer.data
    }
}

export default connect(mapStateToProps, { fetchAPIDetails })(Home);