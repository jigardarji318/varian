import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react';

class LITSPromo extends Component {
    state = {};

    render() {
        const hstyle = {

            fontSize: '12px'
        }
        return (
            <Grid.Column>
                <Card>
                    <Card.Content>
                        <Card.Header style={hstyle}>
                            PROMO BOX
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        BEST RANKED MODELS
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header style={hstyle}>
                            PROMO BOX
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        Newly Created Recordset
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header style={hstyle}>
                            PROMO BOX
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        Newly Created Recordset
                    </Card.Content>
                </Card>
            </Grid.Column>
        );
    }
}

export default LITSPromo;