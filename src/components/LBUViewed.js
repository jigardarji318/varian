import React, { Component } from 'react';
import { Header, Grid, Dropdown, Divider } from 'semantic-ui-react';

class ViewedComponent extends Component {
    render() {
        const hstyle = {
            background: 'lightyellow'
        }
        const options = [
            { key: 'recordset1', text: 'Recordset 1', value: 'recordset1' },
            { key: 'recordset2', text: 'Recordset 2', value: 'recordset2' },
            { key: 'recordset3', text: 'Recordset 3', value: 'recordset3' },
            { key: 'recordset4', text: 'Recordset 4', value: 'recordset4' },
            { key: 'recordset5', text: 'Recordset 5', value: 'recordset5' },

        ];
        return (
            <Grid.Column>
                <Header attached='top' block as='h4' style={hstyle}>
                    Viewed
                </Header>
                <Header attached='top' as='h5' >
                    Latest Recordset Created
                </Header>
                <Divider hidden />
                <Dropdown placeholder='Select Recordset' fluid multiple selection options={options} />

                <Header attached='top' as='h5' >
                    Latest Pipeline
                </Header>
                <Divider hidden />
                <Dropdown placeholder='Select Recordset' fluid multiple selection options={options} />

                <Header attached='top' as='h5' >
                    Latest Models
                </Header>
                <Divider hidden />
                <Dropdown placeholder='Select Recordset' fluid multiple selection options={options} />
            </Grid.Column>
        );
    }
}

export default ViewedComponent;