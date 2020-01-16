import React from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';
import LITSCreated from './LITSCreated';
import LITSPromo from './LITSPromo';

class LIT extends React.Component {
    super = {};

    render() {
        const hstyle = {
            background: 'lightyellow'
        }
        return (
            <Grid.Column>
                <Header attached='top' as='h4' block style={hstyle}>
                    LATEST IN THE SYSTEM
                </Header>
                <Segment attached='bottom'>
                    <Grid.Row>
                        <Grid.Column>
                            <Grid columns={2}>
                                <LITSCreated />
                                <LITSPromo />
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Segment>
            </Grid.Column>
        );
    }
}

export default LIT;