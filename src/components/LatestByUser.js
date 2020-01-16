import React from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';
import LITS from './LITS';
import LBUViewed from './LBUViewed';
import LBUCreated from './LBUCreated';

class LatestByUser extends React.Component {
    super = {};

    render() {
        const hstyle = {
            background: 'lightyellow'
        }
        return (
            <div>
                <Grid columns={2}>
                    <Grid.Column>
                        <Header attached='top' as='h4' block style={hstyle}>
                            LATEST BY THE USER
                        </Header>
                        <Segment attached='bottom'>
                            <Grid.Row>
                                <Grid.Column>
                                    <Grid columns={2}>
                                        <LBUViewed />
                                        <LBUCreated />
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                        </Segment>
                    </Grid.Column>
                    <LITS />
                </Grid>
            </div >
        );
    }
}

export default LatestByUser;