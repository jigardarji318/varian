import React from 'react';
import { Grid } from 'semantic-ui-react';
import LatestByUser from './LatestByUser';

class Latest extends React.Component {
    super = {};

    render() {
        return (
            <div>
                <Grid.Row>
                    <Grid.Column>
                        <LatestByUser />
                    </Grid.Column>
                </Grid.Row>
            </div>
        );
    }
}

export default Latest;